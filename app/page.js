import React from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Link from 'next/link'
import Banner from './components/Banner'
import NewsLetter from './components/NewsLetter'
import FeaturedProducts from './components/FeaturedProducts'
import PopularProducts from './components/PopularProducts'



const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <FeaturedProducts />
      <PopularProducts />
      <Banner />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
