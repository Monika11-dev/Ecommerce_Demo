import { Box, Link, Avatar, Typography } from "@mui/material";
import bgImg from "../assets/Images/herobg2.avif";
import PersonIcon from '@mui/icons-material/Person';
import RegistrationForm from "../Components/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Grid from "@mui/material/Grid2";

const styles = {
  registerBg: {
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  }
}

const formLayout = {
  boxShadow: 24,
  textAlign: "center",
  padding: 4,
  bgcolor: "white",
};

export default function Registration() {

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      navigate("/Home");
    }
    else {
      navigate("/Registration");
    }

  }, [navigate]);

  return (
    <Box component="section" sx={{ backgroundImage: `url(${bgImg})`, p: 2 }} style={styles.registerBg}>

      {/* Form container */}
      <Box component="section" sx={formLayout} >
        <Grid container sx={{ width: { xs: "280px", sm: "300px", md: "300px", lg: "300px" } }}>
          <Grid size={{ xs: 12, md: 12, lg: 12 }} >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar sx={{ mb: "4px", bgcolor: "orange" }}>
                <PersonIcon sx={{ fill: "white" }} />
              </Avatar>
            </Box>

            <Typography component="h1" sx={{ fontSize: "25px" }}>
              Sign Up
            </Typography>
            
            <RegistrationForm />

            <Typography component="h6" variant="h6" sx={{ mt: 2, fontSize: "16px" }}>
              Already have an account ? <Link href="/Login" underline="none">Login here</Link>
            </Typography>
          </Grid>

        </Grid>


      </Box>
    </Box>
  )
}
