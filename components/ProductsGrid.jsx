function ProductsGrid({ produtos }) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 overflow-x-hidden">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="bg-gray-100 h-72 flex items-center justify-center p-6">
            <img
              src={produto.image}
              alt={produto.title}
              className="h-full object-contain"
            />
          </div>

          <div className="p-5">
            <h2 className="font-bold text-lg mb-2 line-clamp-2">
              {produto.title}
            </h2>
            <p className="text-gray-500 mb-3 text-sm">{produto.category}</p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                R$ {produto.price}
              </span>
              <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition">
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
