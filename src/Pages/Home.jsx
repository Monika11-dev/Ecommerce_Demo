import Topheader from "../Components/Navbar/topheader";
import Mainheader from "../Components/Navbar/Mainheader";
import Herosection from "../Components/HeroSection/Herosection";
import Herobottom from "../Components/HeroSection/Herobottom";
import Subhead from "../Components/Subhead";
import heroImage from "../assets/Images/heroImage.jpeg";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import Featureditem from "../Components/Featureditem";
import Collections from "../Components/Collections";
import Footer from "../Components/Footer/Footer";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ImageGrid from "../Components/ImageGrid";

export default function Home() {

  const navigate = useNavigate();
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
      navigate("/Home");
    }
    else {
      navigate("/Login");
    }
   
  }, [navigate]);

  return (
    <> 
        <Topheader text = "Free Shipping on all orders over Rs. 500. Learn more !"/>
        <Mainheader/>
        <Herosection imgpath={heroImage} text1="Enhancing your" text2="inner beauty"/>
        <Herobottom text1="Flat-rate Delivery" text2="Support 24/7" text3="Secure Payment" text4="Free Return"/>
        <Subhead subheading="Shop by Categories"/>
        <ImageGrid/>
        <Subhead subheading="New Arrivals"/>
        <ProductCard/>
        <Banner/>
        <Subhead subheading="Featured Items"/>
        <Featureditem/>
        <Collections/>
        <Footer/>
        
        
    </>
  )
}
