import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductSlider from "./ProductSlider";
import Proddetail from "./Proddetail";
import { useParams } from "react-router-dom";


const styles = {
  changeItemBtn : {
    fontSize:"12px",
    textTransform:"Capitalize",
    color:'#2B2B2B',
  }
}

export default function ProdDetails() {

  const { id } = useParams();

  const prodId = parseInt(id);

  return (
    <Box component="section" sx={{ bgcolor: "#f3f3f3" }} >
      <Container>
      <Grid container>
        <Grid size={{ xs: 8, md: 10 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#606060" variant="body2" to="/Home">
              Home
            </Link>
            <Link
              underline="hover"
              color="#606060"
              to="/"
              variant="body2"
            >
              Shop
            </Link>
            <Typography sx={{ color: '#606060', fontSize: '0.875rem' }}>Product-Name</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid size={{ xs: 4, md: 2 }} sx={{mt:1}}>
          <Stack direction="row" spacing={1}>
            <Link  to={`/Product/${prodId-1}`} style={styles.changeItemBtn}><NavigateBeforeIcon/></Link>
            <Link  to={`/Product/${prodId+1}`} style={styles.changeItemBtn}><NavigateNextIcon/></Link>
          </Stack>
        </Grid>
        </Grid>
        <Grid container>
        <Grid size={{ xs: 12,sm:6, md: 5 }}>

         {/* Product Image slider  */}

          <ProductSlider prodId={prodId}/>
        </Grid>
        <Grid size={{ xs: 12,sm:6, md: 7 }}>

           {/* Product Details  */}
           {/* Product name and description  */}

           <Proddetail prodId={prodId}/>
        </Grid>
        </Grid>

      </Container>
    </Box>
  )
}
