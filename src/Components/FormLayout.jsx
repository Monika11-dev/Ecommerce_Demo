import { Box, Typography, Avatar  } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import LoginForm from "./LoginForm";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

const formLayout = {
  textAlign: 'center',
  boxShadow: 24,
  px: "20px",
  pt:"25px",
  pb:"30px",
  bgcolor: "white",
};

export default function FormLayout() {
  return (

    <Box component="section" sx={formLayout} >
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, }} sx={{ width: { xs: "280px", sm: "300px", md: "300px", lg: "300px" } }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar sx={{ mb: "4px", bgcolor: "orange" }}>
              <LockIcon sx={{ fill: "white" }} />
            </Avatar>
          </Box>

          <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontSize: "25px" }}>
            Login
          </Typography>
          <LoginForm />
          <Typography component="h6" variant="h6" sx={{ textAlign: 'center', fontSize: "16px" }}>
            Do not have an account ? <Link href="/Registration" underline="none">Sign up here</Link>
          </Typography>
        </Grid>

      </Grid>


    </Box>

  )
}
