// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Cart from "./cart/page";
import Hero from "./component/Hero";
import Ourproduct from "./component/Ourproduct";
import Products from "./component/Poducts";
import Slides from "./component/Slide";
import SubHero from "./component/Subhero";


export default function Home(){
  return (
    <>
    
    {/* <Header/> */}
    <Hero/>
    <SubHero/>
 <Ourproduct/>
    <Slides/>
  
    {/* <Footer/> */}
    </>
  )
}