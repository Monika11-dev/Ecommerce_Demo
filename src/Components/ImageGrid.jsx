import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import img1 from '../assets/Images/Cat7.jpg';
import img2 from '../assets/Images/Cat8.jpg';
import img3 from '../assets/Images/Cat3.jpg';
import { Button } from '@mui/material';

const styles = {
  imgstyle1: {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },

  imgstyle2: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',

  },

  catOverlayTest: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
    borderColor: "#013135",
    '@media(min-width: 600px)': {
      left: '40px',
    },
    
  },
}

export default function ImageGrid() {
  return (
    <Box component="section" >
      <Container maxWidth='md'>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid size={{ md: 6, lg: 6 }} style={styles.imgstyle1} sx={{ height: { md: '75vh', lg: '75vh', xl: '600px' }, display: { sm: 'none', md: 'block', lg: 'block' } }}>
            <Button variant="outlined" sx={{ display: { sm: 'none', md: 'block', lg: 'block' } }} style={styles.catOverlayTest}>Hats</Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} >
            <Grid container columnSpacing={2} rowSpacing={2} >
              <Grid size={{ xs: 12, sm: 6 }} style={styles.imgstyle1} sx={{ height: { xs: '40vh', sm: '40vh' }, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                <Button variant="outlined" sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} style={styles.catOverlayTest}>Hats</Button>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} style={styles.imgstyle2} sx={{ backgroundImage: `url(${img2})`, height: { xs: '40vh', sm: '40vh', md: '50vh', lg: '50vh', xl: '400px' } }}>

                <Button variant="outlined" style={styles.catOverlayTest}>Bags</Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} sx={{ backgroundImage: `url(${"https://miraggiolife.com/cdn/shop/files/MP3_00095.jpg?v=1728894661&width=1080"})`, height: { xs: '40vh', sm: '40vh', md: '50vh', lg: '50vh', xl: '400px' } }} style={styles.imgstyle2}>
                <Button variant="outlined" style={styles.catOverlayTest}>Shoes</Button>
              </Grid>


              <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }} style={styles.imgstyle2} sx={{ backgroundImage: `url(${img3})`, height: { xs: '40vh', sm: '40vh', md: '23vh', lg: '23vh', xl: '184px' } }}>
                <Button variant="outlined" style={styles.catOverlayTest}>Eyewear</Button>

              </Grid>
            </Grid>


          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}
