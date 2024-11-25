
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  catCard: {
      position: 'relative',
   },
   catOverlayTest: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'black',
      borderColor:"#013135",
      '@media(min-width: 600px)': { 
     left: '40px', 
    },     
},
};
// if (matches) {
//   styles.catOverlayTest.left = "40px";
  
// }

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  
  return (
    <Container
    sx={{
      display: 'flex',           
      justifyContent: 'center',  
      alignItems: 'center',      
      
    }}
  >
<Box component="section" sx={{ p: 1}}>
    <ImageList
      sx={{ width: 1000, height: 600 , overflowY: 'hidden'}}
      variant="quilted"
      cols={4}
      rowHeight={200}
      
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} sx={{m:1}} style={styles.catCard}>
          <img
            {...srcset(item.img, 200, item.rows, item.cols)} 
            alt={item.title}
            loading="lazy" 
          />
          <Button variant="outlined" style={styles.catOverlayTest}>{item.title}</Button>
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </Container>
  );
}

const itemData = [
  {
    img: './src/assets/Images/Cat7.jpg',
    title: 'hats',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://miraggiolife.com/cdn/shop/files/MP3_00095.jpg?v=1728894661&width=1080',
    title: 'bags',
    rows:2,
  },
  { img: './src/assets/Images/Cat8.jpg',
    title: 'shoes',
    rows:2,
  },
  {
    img: './src/assets/Images/Cat3.jpg',
    title: 'glasses',
    cols: 2,
  },
  
];
