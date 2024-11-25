import { Box } from "@mui/material";
import bgImg from "../assets/Images/herobg2.avif";
import FormLayout from "../Components/FormLayout";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

const styles = {
    registerBg : {    
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',  
       display:'flex',
       justifyContent:"center",
       alignItems:"center",
       
}}

export default function Login() {
 

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
   <Box component="section" sx={{backgroundImage: `url(${bgImg})`}} style={styles.registerBg}>
       <FormLayout/>
   </Box>
  )
}