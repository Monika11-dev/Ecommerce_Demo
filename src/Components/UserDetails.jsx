import { Box,Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckoutForm from "./CheckoutForm";
import CheckoutPrice from "./CheckoutPrice";


export default function UserDetails() {
  return (
   <>
    <Box component="section" sx={{px:2,py:4}} >
      <Container>
      <Grid container columnSpacing={4}>
        <Grid size={{ xs: 12,sm:6, md: 6, lg:8, }}>
          <CheckoutForm/>
         
        </Grid>
        <Grid size={{ xs: 12,sm:6, md: 6, lg:4, }}>
          <CheckoutPrice/>
        </Grid>
      </Grid>
    </Container>
    </Box>
   </>
  )
}
