import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "", // Novo campo adicionado ao estado
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada com sucesso sobre: ${formData.assunto}`);
    // Limpa todos os campos, incluindo o novo telefone
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Entre em Contato
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Nome"
            required
            className="border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* NOVO CAMPO DE TELEFONE */}
          <input
            type="tel"
            placeholder="Telefone"
            required
            className="border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
          />

          {/* SELECT DROPDOWN REESTILIZADO */}
          <div className="relative">
            <select
              required
              className="w-full appearance-none bg-gray-900 text-white border-none p-4 rounded-2xl outline-none cursor-pointer focus:ring-2 focus:ring-gray-700 transition-all hover:bg-gray-800"
              value={formData.assunto}
              onChange={(e) =>
                setFormData({ ...formData, assunto: e.target.value })
              }
            >
              <option value="" disabled className="bg-white text-gray-900">
                Assunto
              </option>
              <option
                value="Trocas e Devoluções"
                className="bg-white text-gray-900"
              >
                Trocas e Devoluções
              </option>
              <option
                value="Dúvidas sobre Pedidos"
                className="bg-white text-gray-900"
              >
                Dúvidas sobre Pedidos
              </option>
              <option
                value="Sugestões e Elogios"
                className="bg-white text-gray-900"
              >
                Sugestões e Elogios
              </option>
              <option
                value="Trabalhe Conosco"
                className="bg-white text-gray-900"
              >
                Trabalhe Conosco
              </option>
              <option value="Outros" className="bg-white text-gray-900">
                Outros
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <textarea
            placeholder="Sua mensagem"
            rows="4"
            required
            className="border border-gray-200 p-4 rounded-2xl outline-none resize-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            value={formData.mensagem}
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white py-4 px-12 rounded-3xl font-bold cursor-pointer hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all mx-auto w-max"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
