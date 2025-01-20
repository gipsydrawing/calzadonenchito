import { useState } from 'react';

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para manejar el clic y abrir o cerrar el menú
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en una categoría
  const handleCategoryClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Menú a la izquierda del logo */}
        <div className="hidden lg:flex items-center space-x-8"> {/* Aumentar el espacio entre elementos */}
          {/* Enlace Niña */}
          <div className="relative group">
            <button className="text-white text-lg hover:text-yellow-500">Niña</button>
            <div className="absolute left-0 bg-blue-900 mt-2 rounded shadow-lg text-center w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="space-y-3"> {/* Añadir espacio entre los elementos */}
                <li><a href="/productos/Niña/Zapato" className="block px-4 py-2 text-white hover:bg-gray-600">Zapato</a></li>
                <li><a href="/productos/Niña/Bota" className="block px-4 py-2 text-white hover:bg-gray-600">Bota</a></li>
                <li><a href="/productos/Niña/Deportiva" className="block px-4 py-2 text-white hover:bg-gray-600">Deportiva</a></li>
                <li><a href="/productos/Niña/ZapatillaCasa" className="block px-4 py-2 text-white hover:bg-gray-600">Zapatilla de casa</a></li>
              </ul>
            </div>
          </div>

          {/* Enlace Mujer */}
          <div className="relative group">
            <button className="text-white text-lg hover:text-yellow-500">Mujer</button>
            <div className="absolute left-0 bg-blue-900 mt-2 rounded shadow-lg text-center w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="space-y-3"> {/* Añadir espacio entre los elementos */}
                <li><a href="/productos/Mujer/Zapato" className="block px-4 py-2 text-white hover:bg-gray-600">Zapato</a></li>
                <li><a href="/productos/Mujer/Bota" className="block px-4 py-2 text-white hover:bg-gray-600">Bota</a></li>
                <li><a href="/productos/Mujer/Deportiva" className="block px-4 py-2 text-white hover:bg-gray-600">Deportiva</a></li>
                <li><a href="/productos/Mujer/ZapatillaCasa" className="block px-4 py-2 text-white hover:bg-gray-600">Zapatilla de casa</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-28">
          <img
            src="/images/logo.png"
            alt="Logo Calzado Nenchito"
            className="h-48"
          />
        </div>

        {/* Menú a la derecha del logo */}
        <div className="hidden lg:flex items-center space-x-8"> {/* Aumentar el espacio entre elementos */}
          {/* Enlace Niño */}
          <div className="relative group">
            <button className="text-white text-lg hover:text-yellow-500">Niño</button>
            <div className="absolute left-0 bg-blue-900 mt-2 rounded shadow-lg text-center w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="space-y-3"> {/* Añadir espacio entre los elementos */}
                <li><a href="/productos/Niño/Zapato" className="block px-4 py-2 text-white hover:bg-gray-600">Zapato</a></li>
                <li><a href="/productos/Niño/Bota" className="block px-4 py-2 text-white hover:bg-gray-600">Bota</a></li>
                <li><a href="/productos/Niño/Deportiva" className="block px-4 py-2 text-white hover:bg-gray-600">Deportiva</a></li>
                <li><a href="/productos/Niño/ZapatillaCasa" className="block px-4 py-2 text-white hover:bg-gray-600">Zapatilla de casa</a></li>
              </ul>
            </div>
          </div>

          {/* Enlace Hombre */}
          <div className="relative group">
            <button className="text-white text-lg hover:text-yellow-500">Hombre</button>
            <div className="absolute left-0 bg-blue-900 mt-2 rounded shadow-lg text-center w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="space-y-3"> {/* Añadir espacio entre los elementos */}
                <li><a href="/productos/Hombre/Zapato" className="block px-4 py-2 text-white hover:bg-gray-600">Zapato</a></li>
                <li><a href="/productos/Hombre/Bota" className="block px-4 py-2 text-white hover:bg-gray-600">Bota</a></li>
                <li><a href="/productos/Hombre/Deportiva" className="block px-4 py-2 text-white hover:bg-gray-600">Deportiva</a></li>
                <li><a href="/productos/Hombre/ZapatillaCasa" className="block px-4 py-2 text-white hover:bg-gray-600">Zapatilla de casa</a></li>
              </ul>
            </div>
          </div>

          {/* Enlace "Sobre nosotros" al final */}
          <a href="/nosotros" className="text-white text-lg">Sobre nosotros</a>
        </div>

        {/* Menú de móvil */}
        <div className="lg:hidden">
          {/* Botón hamburguesa */}
          <button
            onClick={toggleMenu} // Toggle de abrir/cerrar
            className="text-white text-2xl"
          >
            &#9776;
          </button>

          {/* Menú desplegable en móvil */}
          {isMobileMenuOpen && (
            <div className="absolute top-0 right-0 bg-blue-900 p-4 w-full">
              <ul className="space-y-6"> {/* Añadir espacio entre los elementos del menú móvil */}
                <li>
                  <a href="/productos/Niña" className="text-white text-lg" onClick={handleCategoryClick}>Niña</a>
                  <ul className="space-y-3 ml-4"> {/* Añadir espacio entre los elementos del submenú */}
                    <li><a href="/productos/Niña/Zapato" className="text-white">Zapato</a></li>
                    <li><a href="/productos/Niña/Bota" className="text-white">Bota</a></li>
                    <li><a href="/productos/Niña/Deportiva" className="text-white">Deportiva</a></li>
                    <li><a href="/productos/Niña/ZapatillaCasa" className="text-white">Zapatilla de casa</a></li>
                  </ul>
                </li>
                <li className="border-t border-gray-500"></li> {/* Separador */}
                <li>
                  <a href="/productos/Mujer" className="text-white text-lg" onClick={handleCategoryClick}>Mujer</a>
                  <ul className="space-y-3 ml-4"> {/* Añadir espacio entre los elementos del submenú */}
                    <li><a href="/productos/Mujer/Zapato" className="text-white">Zapato</a></li>
                    <li><a href="/productos/Mujer/Bota" className="text-white">Bota</a></li>
                    <li><a href="/productos/Mujer/Deportiva" className="text-white">Deportiva</a></li>
                    <li><a href="/productos/Mujer/ZapatillaCasa" className="text-white">Zapatilla de casa</a></li>
                  </ul>
                </li>
                <li className="border-t border-gray-500"></li> {/* Separador */}
                <li>
                  <a href="/productos/Niño" className="text-white text-lg" onClick={handleCategoryClick}>Niño</a>
                  <ul className="space-y-3 ml-4"> {/* Añadir espacio entre los elementos del submenú */}
                    <li><a href="/productos/Niño/Zapato" className="text-white">Zapato</a></li>
                    <li><a href="/productos/Niño/Bota" className="text-white">Bota</a></li>
                    <li><a href="/productos/Niño/Deportiva" className="text-white">Deportiva</a></li>
                    <li><a href="/productos/Niño/ZapatillaCasa" className="text-white">Zapatilla de casa</a></li>
                  </ul>
                </li>
                <li className="border-t border-gray-500"></li> {/* Separador */}
                <li>
                  <a href="/productos/Hombre" className="text-white text-lg" onClick={handleCategoryClick}>Hombre</a>
                  <ul className="space-y-3 ml-4"> {/* Añadir espacio entre los elementos del submenú */}
                    <li><a href="/productos/Hombre/Zapato" className="text-white">Zapato</a></li>
                    <li><a href="/productos/Hombre/Bota" className="text-white">Bota</a></li>
                    <li><a href="/productos/Hombre/Deportiva" className="text-white">Deportiva</a></li>
                    <li><a href="/productos/Hombre/ZapatillaCasa" className="text-white">Zapatilla de casa</a></li>
                  </ul>
                </li>
                <li className="border-t border-gray-500"></li> {/* Separador */}
                <li><a href="/nosotros" className="text-white text-lg" onClick={handleCategoryClick}>Sobre nosotros</a></li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
