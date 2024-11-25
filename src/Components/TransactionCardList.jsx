
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: '../src/assets/Images/card5.webp',
    title: 'Visa card',
  },
  {
    img: '../src/assets/Images/card6.png',
    title: 'master card',
  },
  {
    img: '../src/assets/Images/card7.avif',
    title: 'american express',
  },
  {
    img: '../src/assets/Images/card3.jpeg',
    title: 'paypal',
  },
  {
    img: '../src/assets/Images/card8.png',
    title: '',
  },
  
  
];

export default function TransactionCardList() {
  return (
    <ImageList sx={{ width: {xs:280,lg:500}, height: {xs:30,lg: 50 },overflowY: 'hidden'}} cols={6} rowHeight={50}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


