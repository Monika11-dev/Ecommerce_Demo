import Carousel from 'react-material-ui-carousel';
import Prodimg from './Prodimg';
// import { Collection } from '../../Database/collection';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { dummyProductData } from "../../Database/productdata";

export default function ProductSlider(props) {

    const product = dummyProductData.find((product) => product.id === parseInt(props.prodId));

    return (
        <Carousel sx={{boxShadow: 0,my:2 }} autoPlay="false" animation="slide" navButtonsAlwaysVisible="true" 
        navButtonsProps={{    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: 'orange',     
        } 
    }}  NextIcon={<NavigateNextIcon sx={{fill:'white'}}/>}
    PrevIcon={<NavigateBeforeIcon sx={{fill:'white'}}/>} >
            {
                <Prodimg  item={product.productImage} />
                  }

            
        </Carousel>
        
    )
}
// Collection.map( (item, i) => <Prodimg key={i} item={item} /> )
