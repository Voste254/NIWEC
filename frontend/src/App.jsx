import HeroSection from "./components/pages/Herosection";
import Journey from "./components/pages/Journey";
import MissionSection from "./components/pages/Mission";
import Navbar from "./components/pages/Navbar";
import FeaturedProducts from "./components/pages/Products";
import Services from "./components/pages/Services";
import { Route, Routes } from "react-router-dom";

function Landing(){
return(
  <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <FeaturedProducts/>
    <Journey/>
    <MissionSection/>
  </>

  )}

  export default function App(){
    return (
    <Routes>
      <Route path='/' element={<Landing/>} />
    </Routes>
  
    )
  }
  