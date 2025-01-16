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
export navbar