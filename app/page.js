'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Calzado Nenchito</title>
        <meta name="description" content="La mejor tienda online de calzado para todos los gustos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png"  // Asegúrate de tener la imagen del logo en la carpeta 'public/images'
              alt="Logo Calzado Nenchito" 
              className="h-12 mr-4"  // Ajusta el tamaño del logo según sea necesario
            />
            <div className="text-white text-2xl font-bold">Calzado Nenchito</div>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white mr-6"
            >
              Productos
            </button>
            {isMenuOpen && (
              <div className="absolute bg-gray-700 mt-2 rounded shadow-lg z-10">
                <ul>
                  <li>
                    <a
                      href="/productos/Hombre"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Hombre
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Mujer"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Mujer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/niña"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Niña
                    </a>
                  </li>
                  <li>
                    <a
                      href="/niño"
                      className="block px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Niño
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <a href="#nosotros" className="text-white">Sobre nosotros</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Bienvenido a Calzado Nenchito</h1>
          <p className="text-lg mb-8">Encuentra el mejor calzado para cualquier ocasión</p>
          <a href="#productos" className="bg-white text-blue-600 py-2 px-6 rounded-lg font-bold hover:bg-gray-200">
            Explorar Productos
          </a>
        </div>
      </section>

      {/* Productos destacados */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>2025 Calzado Nenchito® Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
