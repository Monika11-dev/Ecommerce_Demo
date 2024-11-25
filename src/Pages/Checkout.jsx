import Topheader from "../Components/Navbar/topheader";
import Mainheader from "../Components/Navbar/Mainheader";
import Breadcrumb from "../Components/Breadcrumb";
import UserDetails from "../Components/UserDetails";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
      navigate("/Checkout");
    }
    else {
      navigate("/Login");
    }
   
  }, [navigate]);

  return (
    <>
    <Topheader text = "Free Shipping on all orders over Rs. 500. Learn more !"/>
    <Mainheader/>
    <Breadcrumb/>
    <UserDetails/>
    </>
  )
}
