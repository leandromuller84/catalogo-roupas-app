function ProductCard({ produto }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        duration-300
      "
    >
      <div
        className="
          bg-gray-100
          h-75
          flex
          items-center
          justify-center
          p-6
        "
      >
        <img
          src={produto.image}
          alt={produto.title}
          className="
            h-full
            object-contain
          "
        />
      </div>

      <div className="p-5">
        <h2
          className="
            font-bold
            text-lg
            mb-2
            line-clamp-2
          "
        >
          {produto.title}
        </h2>

        <p className="text-gray-500 mb-3">{produto.category}</p>

        <div
          className="
            flex
            justify-between
            items-center
          "
        >
          <span
            className="
              text-2xl
              font-bold
              text-green-600
            "
          >
            R$ {produto.price}
          </span>

          <button
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-gray-800
            "
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
