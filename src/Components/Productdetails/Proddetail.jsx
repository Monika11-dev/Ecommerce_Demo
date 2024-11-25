import { Container, Typography } from "@mui/material";
import {Button} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import TransactionCardList from "../TransactionCardList";
import { dummyProductData } from "../../Database/productdata";
import CartContext from '../../ContextAPI/CartContext.js'
import { useContext } from 'react';
import { useState } from "react";
import { useEffect } from "react";

const styles ={
    cartBtn : {
        borderColor: 'lightgrey',
        color: 'grey',
       
    }
}

export default function Proddetail(props) {

  const { cart, addToCart,decrementQuantity,incrementQuantity } = useContext(CartContext);

  const product = dummyProductData.find((product) => product.id === props.prodId);

  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{

       const currentProduct = cart.find((item)=>item.id === product.id);
       if(currentProduct){
        setQuantity(currentProduct.quantity);
       }
      
  },[cart])
  
  console.log(cart);

  return (
    <Container sx={{pt:5,px:3,mx:2,pb:2}}>
    <Typography variant="h2" sx={{ color: '#605959',fontSize:"25px",mb:1}}>{product.productName}</Typography>
    <Typography variant="h6" sx={{ color: 'black',fontSize:"1rem",mb:4}}>Rs.{" "}{product.productPrice}</Typography>
    <Typography variant="body2" sx={{mb:3}}>{product.description}
              </Typography>
      
      <ButtonGroup  variant="outlined" aria-label="Basic button group" sx={{mr:2,mt:2,mb:2}}>
        <Button style={styles.cartBtn} onClick={()=>decrementQuantity(product.id)}>-</Button>
        <Button  style={styles.cartBtn} sx={{ cursor : 'default',disableRipple:"true"}} disableElevation = "true">{quantity}
        </Button>
        <Button style={styles.cartBtn}  onClick={()=>incrementQuantity(product.id)}>+</Button>
      </ButtonGroup>
      <Button variant="contained" sx={{bgcolor:'#F78F2C',boxShadow:0,borderRadius:0,px:3}} onClick={()=>addToCart(product)}>Add to Cart</Button>
      <Typography sx={{ color: '#aba8a8', fontSize: 14,my:5 }}>
        Categories : {product.category}
      </Typography>
      <TransactionCardList />
    </Container>
  )
}
