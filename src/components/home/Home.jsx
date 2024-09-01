import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Founder from './Founder'
import Contact from './Contact'
import Talk from './Talk'
import CarouselComponent from './CarouselComponent'
import WeBelieve from './WeBelieve'

function Home() {
  return (
   <>
    <CarouselComponent/>
    <Section1/>
    <Section2/>
    <WeBelieve/>
    <Founder/>
    <Contact/>
    <Talk/>
   </>
  )
}

export default Home