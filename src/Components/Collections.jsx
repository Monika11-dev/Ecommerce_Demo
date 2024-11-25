import { Container } from "@mui/material";
import Box from "@mui/material/Box";
// import heroImage from "../assets/Images/heroImage.jpeg";
import Grid from '@mui/material/Grid2';
import MediaCard from "./MediaCard";
import {Collection} from "../Database/collection";

export default function Collections() {
  return (
    <Container
        >
            <Box component="section" sx={{ p: 1, textAlign: 'center',my:4}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} >
               
                    {   
                        Collection.map((_, id, dummy) => (
                            <Grid key={id + 1} size={{ xs: 4, sm: 4, md: 4 , lg:4}} >
                       <MediaCard key={id} prodName={dummy[id].title}  prodImg={dummy[id].img}   prodBtn={dummy[id].btntitle}  
                       
                        />    
                        </Grid>              
                    ))}
                    </Grid>
                

            </Box>

        </Container>
  )
}
