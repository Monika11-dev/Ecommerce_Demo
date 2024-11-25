import { Box,Typography,Paper,Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from "react";
import CartContext from "../ContextAPI/CartContext";

export default function CheckoutPrice() {

    const { cart,totalPrice,clearCart} = useContext(CartContext);

    const handlePlaceorder = (e) =>{
        e.preventDefault();
        clearCart();
        alert("Order Placed successfully !");
       
    }

    return (
        <Box component="section" sx={{ px: 2, py: 4, bgcolor: "#f3f3f3",mt:2 }}>
            <Grid container columnSpacing={4} >
                <Grid size={{ xs:8, sm:8, md:8, lg: 8 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, fontWeight: "bold", }} gutterBottom variant="h5" component="div">
                        Product
                    </Typography>
                </Grid>
                <Grid size={{ xs:4, sm:4, md:4,lg: 4 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, textAlign: 'right', fontWeight: "bold" }} gutterBottom variant="h5" component="div">
                        Subtotal
                    </Typography>
                </Grid>

            </Grid>
            <Divider sx={{ my: 1 }} />
            {cart.map((item) => (
            <Grid key={item.prodId} container columnSpacing={4} sx={{ mt: 1 }}>
                <Grid size={{ xs:8,sm:8, md:8,lg: 8 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}}} gutterBottom variant="h5" component="div">
                        {item.productName} {" "} * {item.quantity}
                    </Typography>
                </Grid>
                <Grid size={{ xs:4, sm:4, md:4,lg: 4 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, textAlign: 'right', }} gutterBottom variant="h5" component="div">
                        Rs.{" "} {item.quantity * item.productPrice}
                    </Typography>
                </Grid>

            </Grid>
            ))}
            <Divider sx={{ my: 1 }} />
            <Grid container columnSpacing={4} sx={{ mt: 2 }}>
                <Grid size={{ xs:8,sm:8,md:8,lg: 8 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, color: "#d92424", fontWeight: "bold" }} gutterBottom variant="h5" component="div" >
                        Total
                    </Typography>
                </Grid>
                <Grid size={{ xs:4,sm:4,md:4,lg: 4 }}>
                    <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, textAlign: 'right', color: "#d92424", fontWeight: "bold" }} gutterBottom variant="h5" component="div">
                       Rs.{""} {totalPrice}
                    </Typography>
                </Grid>

            </Grid>
            <Grid container columnSpacing={4} sx={{ mt: 2 }}>
                <Grid size={{ lg: 12 }} >
                    <Paper sx={{ backgroundColor: "#ba3232", p:{xs:'10px',lg:2} }} elevation={0} square>
                        <Typography sx={{ fontSize: {xs:14, sm:15,md:15,lg:16}, color: "white" }} gutterBottom variant="h5" component="div" >
                            The information contained in this website is for general information purposes only. 
                        </Typography>

                    </Paper>
                    <FormGroup sx={{mt:2}}>
                        
                        <FormControlLabel sx={{ fontSize: {xs:13, sm:14,md:14,lg:16}}} required control={<Checkbox color="primary"   required/>} label="I have agreed to the website terms and conditions." />
                       
                    </FormGroup>

                </Grid>

            </Grid>
            <Button variant="contained" onClick={handlePlaceorder} sx={{width:'100%',bgcolor:"#ba3232",boxShadow:0,mt:1,py:{md:1,lg:2}}}>Place order</Button>

        </Box>
    )
}
