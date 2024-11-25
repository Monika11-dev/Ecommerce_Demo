import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const styles = {
    heroLeftSection: {
        backgroundImage: `url(${"src/assets/Images/herobg2.avif"})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
export default function Herosection(props) {

    const navigate = useNavigate();

    const handleShop = () => navigate("/Product/2")

    return (
        <Box component="section" >
            <Grid container>
                <Grid size={{xs:12,sm:6,md:6,lg:6}} style={styles.heroLeftSection}>
                        <Typography component="h1" sx={{ fontSize: 42, color: 'white', fontWeight: 'light' }}>
                            {props.text1}<br /> {props.text2}
                        </Typography>
                        <Button variant="contained" onClick={handleShop} sx={{ my: 2, textTransform: 'uppercase', bgcolor: 'white', color: 'black', boxShadow: 0, fontSize: 12, px: 2 }}>Shop now</Button>          
                </Grid>
                <Grid size={{xs:12,sm:6,md:6,lg:6}} >
                <img src={props.imgpath} style={{ width:'100%',height:'100%' }}></img>
                </Grid>
            </Grid>
        </Box>
            
    )
    
}
Herosection
    .propTypes = {
    text1
        :
        PropTypes
            .string.isRequired,
    text2
        :
        PropTypes
            .string.isRequired,
    imgpath
        :
        PropTypes
            .string.isRequired,
};
