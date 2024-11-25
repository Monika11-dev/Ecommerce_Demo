import { Box } from "@mui/material"
import { makeStyles } from '@mui/styles';
import bannerImg from "../assets/Images/banner3.jpg";

const useStyle = makeStyles({
        backImg:{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            height:600,      
        },
    });

export default function Banner() {
    const classes = useStyle();

  return (
    <Box component="section" className={classes.backImg} sx={{height:{xs:300,sm:400,md:600}}}>
    </Box>
  )
}
