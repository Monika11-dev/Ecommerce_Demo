import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import { dummyProductData } from '../Database/productdata';
import FeatureitemList from "./FeatureitemList";

export default function Featureditem() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Box component="section" sx={{ p: 1, textAlign: 'center', flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16, lg: 16 }} >
                    {dummyProductData.map((_, id, dummy) => (
                       <FeatureitemList key={id} id={dummy[id].id} productName={dummy[id].productName} quantity={dummy[id].quantity} productPrice={dummy[id].productPrice} productImage={dummy[id].productImage} 
                         featureItem = {dummy[id].featuredItem}/>                  
                    ))}
                </Grid>

            </Box>

        </Container>
    )
}
