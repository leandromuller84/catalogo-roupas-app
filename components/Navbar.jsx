import { useNavigate } from "react-router-dom";

function Navbar({ busca, setBusca, setCategoria, buscarProdutos }) {
  const navigate = useNavigate();

  const handleNav = (cat) => {
    setCategoria(cat);
    setBusca(""); // Limpa a busca ao trocar de categoria
    if (cat !== "contato") {
      buscarProdutos(cat);
    }
    navigate(cat === "todos" ? "/" : `/${cat}`);
  };

  return (
    <nav className="bg-black text-white px-5 py-2 flex items-center justify-between shadow-xl">
      <h1
        className="text-3xl font-bold cursor-pointer"
        onClick={() => handleNav("todos")}
      >
        FashionStore
      </h1>

      <ul className="hidden md:flex gap-8 font-semibold">
        <li
          onClick={() => handleNav("todos")}
          className="cursor-pointer hover:text-gray-300"
        >
          Home
        </li>
        <li
          onClick={() => handleNav("masculino")}
          className="cursor-pointer hover:text-gray-300"
        >
          Masculino
        </li>
        <li
          onClick={() => handleNav("feminino")}
          className="cursor-pointer hover:text-gray-300"
        >
          Feminino
        </li>
        <li
          onClick={() => handleNav("promocoes")}
          className="cursor-pointer hover:text-gray-300"
        >
          Promoções
        </li>
        <li
          onClick={() => navigate("/contato")}
          className="cursor-pointer hover:text-gray-300"
        >
          Contato
        </li>
      </ul>

      <input
        type="text"
        placeholder="Buscar roupa..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          // Opcional: Forçar ir para Home ao digitar se quiser que os resultados apareçam sempre lá
          // navigate("/");
        }}
        className="bg-white text-black rounded-lg px-4 py-2 outline-none w-50"
      />
    </nav>
  );
}

export default Navbar;
