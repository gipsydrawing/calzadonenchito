function Destacados() {
    return (
      <section id="productos" className="py-20">
        <div className="bg-blue-900 max-w-7xl mx-auto px-4 text-center rounded">
          <h2 className="text-3xl font-bold mb-8 pt-10">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
              <img
                src="/images/zapato1.jpg"
                alt="Zapato 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Zapato de Cuero</h3>
              <p className="text-gray-700 mb-4">$50</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
                Añadir al carrito
              </button>
            </div>
            {/* Producto 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
              <img
                src="/images/zapato2.jpg"
                alt="Zapato 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Deportiva Nike</h3>
              <p className="text-gray-700 mb-4">$70</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
                Añadir al carrito
              </button>
            </div>
            {/* Producto 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
              <img
                src="/images/zapato3.jpg"
                alt="Zapato 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sandalias Verano</h3>
              <p className="text-gray-700 mb-4">$40</p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Destacados;
  