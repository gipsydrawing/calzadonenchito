import Head from 'next/head'

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Calzado Nenchito</title>
        <meta name="description" content="Conoce más sobre Calzado Nenchito, nuestra historia, misión y valores." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {/* Sección de Introducción */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">Nuestra Historia</h1>
          <p className="text-lg mb-8">En Calzado Nenchito, nos dedicamos a ofrecer los mejores productos de calzado para todos. Con años de experiencia, nos hemos convertido en líderes en el mercado.</p>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Misión */}
            <div className="text-center">
              <h2 className="text-2xl text-black font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">Brindar productos de calzado de alta calidad, cómodos y a precios accesibles para todos nuestros clientes, garantizando su satisfacción y bienestar.</p>
            </div>
            {/* Visión */}
            <div className="text-center">
              <h2 className="text-2xl text-black font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">Convertirnos en la tienda de calzado más confiable y accesible del país, liderando el mercado y ofreciendo productos innovadores que se adapten a las necesidades de nuestros clientes.</p>
            </div>
            {/* Valores */}
            <div className="text-center">
              <h2 className="text-2xl text-black font-bold mb-4">Nuestros Valores</h2>
              <ul className="text-gray-700">
                <li>Integridad</li>
                <li>Calidad</li>
                <li>Innovación</li>
                <li>Compromiso</li>
              </ul>
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
  )
}
