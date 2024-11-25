import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RecommendIcon from '@mui/icons-material/Recommend';
import PaymentIcon from '@mui/icons-material/Payment';
import BackHandIcon from '@mui/icons-material/BackHand';

const styles = {
    paperContainer: {   
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        color:'white',
        marginBottom:"5px",
    }
};

export default function Herobottom(props) {
    return (
        <Box component="section" sx={{ p: 3, bgcolor: '#013135' }}>

            <Grid container >
                <Grid size={{xs:6,sm:3,md:3}} sx={{ borderRight: {xs : 0, md: 1, lg:1} }} style={styles.paperContainer}>

                
                    <DeliveryDiningIcon sx={{fill: 'white',mr:1,fontSize:{xs:30,md:40,lg:40}}}/>

                    <Typography component="span" sx={{ fontSize: 16, color: 'white', fontWeight: 'light' }}>
                        {props.text1}
                    </Typography>


                </Grid>
                <Grid size={{xs:6,sm:3,md:3}} sx={{ borderRight: {xs : 0, md: 1, lg:1} }} style={styles.paperContainer}>
                <RecommendIcon sx={{fill: 'white',mr:1,fontSize:{xs:30,md:40,lg:40}}}/>
                    <Typography component="span" sx={{ fontSize: 16, color: 'white', fontWeight: 'light' }}>
                        {props.text2}
                    </Typography>

                </Grid>
                <Grid size={{xs:6,sm:3,md:3}} sx={{borderRight: {xs : 0, md: 1, lg:1} }} style={styles.paperContainer}>
                <PaymentIcon sx={{fill: 'white',mr:1,fontSize:{xs:30,md:40,lg:40}}}/>
                    <Typography component="span" sx={{ fontSize: 16, color: 'white', fontWeight: 'light' }}>
                        {props.text3}
                    </Typography>

                </Grid>
                <Grid size={{xs:6,sm:3,md:3}}  style={styles.paperContainer}>
                <BackHandIcon sx={{fill: 'white',mr:1,fontSize:{xs:30,md:40,lg:40}}}/>
                    <Typography component="span" sx={{ fontSize: 16, color: 'white', fontWeight: 'light' }}>
                        {props.text4}
                    </Typography>

                </Grid>
            </Grid>

        </Box>
    )
}

Herobottom
    .propTypes = {
    text1
        :
        PropTypes
            .string.isRequired,
    text2
        :
        PropTypes
            .string.isRequired,
    text3
        :
        PropTypes
            .string.isRequired,

    text4
        :
        PropTypes
            .string.isRequired,
};
