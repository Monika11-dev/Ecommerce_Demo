import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Button, Link } from '@mui/material';
import CartContext from '../ContextAPI/CartContext';
import { useContext } from 'react';

const styles = {
    catCard:{
        position:'relative',
        margin:'auto',
    },
     catOverlayTest: {
        position: 'absolute',
        top: '200px',
        left: '5px',
        color:'white',
  }};
  
export default function FeatureitemList(props) {
    const { addToCart } = useContext(CartContext);

    if(props.featureItem){
        return(
            <Grid size={{ xs: 4, sm: 3, md: 4 }}>
                <Card sx={{ maxWidth: {xs:300,sm:240,md:240}, boxShadow: 0, borderRadius: '1px' }} style={styles.catCard}>
                    <CardMedia
                        sx={{ height: 240 }}
                        image={props.productImage}
                        title={props.productName}
                    />
                    <CardContent>
                    <Link  href={`/Product/${props.id}`} underline="none" >
                        <Typography sx={{ fontSize: 16, fontWeight: 'light' }} gutterBottom variant="h5" component="div">
                            {props.productName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Rs {props.productPrice}
                        </Typography>
                    </Link>
                    </CardContent>
                    <Button variant="contained" onClick={()=>addToCart(props)} sx={{ padding:"3px 8px", bgcolor:"#F78F2C", boxShadow:0,textTransform:"Capitalize"}} style={styles.catOverlayTest}>Add to cart</Button>
                </Card>

            </Grid> 
        )
    }
}

FeatureitemList.propTypes = {
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    featureItem : PropTypes.bool.isRequired,
    id : PropTypes.number.isRequired,
  };
