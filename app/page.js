'use client';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Destacados from './components/destacados';
import Footer from './components/footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Calzado Nenchito</title>
        <meta name="description" content="La mejor tienda online de calzado para todos los gustos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Hero></Hero>
      <Destacados></Destacados>
      <Footer></Footer>
    </>
  );
}
