import { Box, Container, Breadcrumbs } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <Box component="section" sx={{ bgcolor: "#f3f3f3" }} >
      <Container>
      <Grid container>
        <Grid size={{ xs: 8, md: 10 }} sx={{display:'flex',alignItems:'center'}}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#606060" variant="body2" to="/Home">
              Home
            </Link>
            <Link
              underline="hover"
              color="#606060"
              to="#"
              variant="body2"
            >
              Checkout
            </Link>
           
          </Breadcrumbs>
        </Grid>
        </Grid>
        </Container>
        </Box>
  )
}
