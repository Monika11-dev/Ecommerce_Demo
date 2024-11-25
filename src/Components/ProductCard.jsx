import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import { dummyProductData } from '../Database/productdata';
import Newarrival from "./Newarrival";

export default function ProductCard() {

    return (
        <Container>
            <Box component="section" sx={{py:1,textAlign: 'center'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16, lg: 16 }} >
                    {dummyProductData.map((_, id, dummy) => (                  
                       <Newarrival key={id} id={dummy[id].id} productName={dummy[id].productName} productPrice={dummy[id].productPrice} productImage={dummy[id].productImage} 
                            newArrive={dummy[id].newArrival} quantity={dummy[id].quantity} count={dummy[id].count}/>                                        
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}