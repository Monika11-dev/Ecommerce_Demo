import Topheader from "../Components/Navbar/topheader";
import Mainheader from "../Components/Navbar/Mainheader";
import ProdDetails from "../Components/Productdetails/ProdDetails";
import AddInfo from "../Components/AddInfo";
import Subhead from "../Components/Subhead";
import Featureditem from "../Components/Featureditem";
import Footer from "../Components/Footer/Footer";


export default function Collection() {


  return (
    <>
        <Topheader text = "Free Shipping on all orders over Rs. 500. Learn more !"/>
        <Mainheader/>
        <ProdDetails/>
        <AddInfo/>
        <Subhead subheading="Related product"/>
        <Featureditem/>
        <Footer/>
     
     </>
  )
}
