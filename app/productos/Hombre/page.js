import Link from 'next/link';

export default function Productos() {
  const products = [
    { id: 1, name: "Zapatos Deportivos", price: 50, image: "/images/1.png", hoverImage: "/images/2.png" },
    { id: 2, name: "Botas de Montaña", price: 80, image: "/images/boots.jpg", hoverImage: "/images/boots-hover.jpg" },
    { id: 3, name: "Sandalias", price: 30, image: "/images/sandals.jpg", hoverImage: "/images/sandals-hover.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Calzado de Hombre</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group perspective-500"
            >
              {/* Imagen principal */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-0"
              />
              {/* Imagen hover */}
              <img
                src={product.hoverImage}
                alt={product.name}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50"></div> {/* Fondo oscuro */}
              <div className="p-4 relative z-10">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                <div className="relative z-10">
                  <Link
                    href={`/productos/Hombre/${product.id}`}
                    className="block mt-4 bg-blue-600 text-white text-center py-2 rounded"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
