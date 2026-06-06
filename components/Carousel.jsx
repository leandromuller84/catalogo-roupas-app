import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2070",
    title: "Nova Coleção Masculina",
    subtitle: "Estilo moderno",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2070",
    title: "Tendências Femininas",
    subtitle: "Elegância e luxo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
    title: "Promoções Imperdíveis",
    subtitle: "Até 50% off",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
            <div className="text-white px-4">
              <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
