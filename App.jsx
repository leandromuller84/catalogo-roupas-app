import { useState, useEffect, useMemo } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import api from "./services/api";

// Importações dos componentes
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todos");
  const navigate = useNavigate();

  // Dicionário de tradução para manter o padrão visual da loja
  const traduzirTitulo = (original) => {
    const traducoes = {
      "Mens Casual Premium Slim Fit T-Shirts":
        "Camiseta Slim Fit Masculina Premium",
      "Mens Cotton Jacket": "Jaqueta de Algodão Masculina",
      "Mens Casual Slim Fit": "Camiseta Casual Slim Fit Masculina",
      "Rain Jacket Women Windbreaker Striped Climbing":
        "Jaqueta Corta-Vento Feminina Listrada",
      "MBJ Women's Solid Short Sleeve Boat Neck V":
        "Blusa Feminina Manga Curta Decote Barco",
      "Opna Women's Short Sleeve Moisture":
        "Blusa Feminina Manga Curta Confortável",
      "DANVOUY Womens T Shirt Casual Cotton Short":
        "Camiseta Casual Feminina Algodão",
      "Lock and Love Women's Removable Hooded Faux":
        "Jaqueta Feminina com Capuz Removível",
      "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter":
        "Jaqueta Feminina 3 em 1 Inverno",
    };
    return traducoes[original] || original;
  };

  async function buscarProdutos(cat = "todos") {
    try {
      let endpoint = "/products";
      if (cat === "masculino") endpoint = "/products/category/men's clothing";
      if (cat === "feminino") endpoint = "/products/category/women's clothing";

      const resposta = await api.get(endpoint);
      let produtosApi = resposta.data;

      // Filtro rigoroso para manter apenas vestuário
      produtosApi = produtosApi.filter(
        (p) =>
          p.category === "men's clothing" || p.category === "women's clothing",
      );

      // Normalização dos títulos
      produtosApi = produtosApi.map((p) => ({
        ...p,
        title: traduzirTitulo(p.title),
      }));

      if (cat === "promocoes") {
        produtosApi = produtosApi.filter((p) => p.price < 50);
      }

      setProdutos(produtosApi);
    } catch (error) {
      console.error("Erro na integração com API:", error);
    }
  }

  useEffect(() => {
    buscarProdutos(categoria);
  }, [categoria]);

  const produtosFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();
    if (!termo) return produtos;
    return produtos.filter((produto) =>
      produto.title.toLowerCase().includes(termo),
    );
  }, [produtos, busca]);

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      {/* Player de áudio invisível carregado globalmente */}
      <MusicPlayer />

      <Navbar
        busca={busca}
        setBusca={(val) => {
          setBusca(val);
          // Redirecionamento inteligente: se digitar em qualquer página, volta para a Vitrine (Home)
          if (val.trim() !== "") navigate("/");
        }}
        setCategoria={setCategoria}
        buscarProdutos={buscarProdutos}
      />

      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {busca.trim() === "" ? (
                  <>
                    <div className="bg-white py-8 text-center shadow-sm w-full">
                      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
                        FashionStore
                      </h1>
                      <p className="text-xl text-gray-600 mt-2 font-medium">
                        O melhor da moda 2026
                      </p>
                    </div>
                    <Carousel />
                  </>
                ) : (
                  <div className="py-10 px-4">
                    <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
                      Resultados para: "{busca}"
                    </h2>
                    <ProductsGrid produtos={produtosFiltrados} />
                  </div>
                )}
              </>
            }
          />

          <Route
            path="/masculino"
            element={<ProductsGrid produtos={produtosFiltrados} />}
          />
          <Route
            path="/feminino"
            element={<ProductsGrid produtos={produtosFiltrados} />}
          />
          <Route
            path="/promocoes"
            element={<ProductsGrid produtos={produtosFiltrados} />}
          />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-black text-white py-3 mt-auto w-full">
        <div className="text-center">
          <p className="text-sm opacity-80">
            Desenvolvido por <span className="font-bold">@Leandro</span> © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
