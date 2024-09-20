import Navbar from "./Layout/Navbar"
import './App.css'
import HeroSection from "./Layout/HeroSection"
import ServiceSection from "./Layout/ServiceSection"
import DeveloperSection from "./Layout/DeveloperSection"
import Footer from "./Layout/Footer"


const App=()=> {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
      <DeveloperSection/>
      <Footer/>
    </>
  )
}

export default App
