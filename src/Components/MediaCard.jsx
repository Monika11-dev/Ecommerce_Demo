import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function MediaCard(props) {
  
  return (
    <Card sx={{ maxWidth: 300, boxShadow: 0, borderRadius: '1px' ,margin:'auto'}}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.prodImg}
        
      />
      <CardContent>
        <Typography sx={{ fontSize: 16, fontWeight: 'light' }} gutterBottom variant="h5" component="div">
          {props.prodName}
        </Typography>
        <Link href="#" underline="hover" sx={{ textTransform: 'lowercase',color: "#F78F2C",fontSize: "15px"}}>{props.prodBtn}</Link>
       
      </CardContent>
    </Card>
  )
  
}

MediaCard.propTypes = {
  prodImg: PropTypes.string.isRequired,
  prodName: PropTypes.string.isRequired,
  prodBtn: PropTypes.string.isRequired,
 
};

