import { Container } from "@mui/material";
import Box from '@mui/material/Box';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
    footerContent: {
        fontWeight: 100,
        underline: "none",
        fontSize: "15px",
    },

    footerLinkBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "7px",
    },

    footerIcon: {
        marginRight: "10px",
        fontSize: "small",
    },

    catCard: {
        position: 'relative',
    },

    catOverlayTest: {
        ['@media(min-width:360px) and (max-width:768px)']: {
            right: '80px',
        },
        position: 'absolute',
        bottom: '70px',
        right: '10px',
        color: 'white',

    }
};

const useStyle = makeStyles({
    prodHeading: {
        fontSize: 10,
    },
    mediaIcons: {
        fontSize: "20px",
    }
});

export default function Footer() {

    const classes = useStyle();

    const handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behaviour: "smooth"
        });
    }

    // const Item = styled(Paper)(({ theme }) => ({

    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     color: theme.palette.text.secondary,
    //     ...theme.applyStyles('dark', {
    //         backgroundColor: '#1A2027',
    //     }),
    // }));

    return (

        <Box component="section" sx={{
            px: 1, bgcolor: "#f3f3f3", pt: 8, pb: 2, fontSize: "30px",
            textDecoration: "none",
            fontWeight: 500,
        }} className = {classes.footerBg} style = {styles.catCard}>
            <Container >
                <Grid container spacing={2} sx={{ borderBottom: 1, pb: 8, borderColor: "#A6AEBF" }}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Link href="/Home" underline="none" sx={{ color: 'black' }}>haute</Link>
                        <Typography component="p" sx={{ color: '#555555', fontWeight: 100, mt: 5, mb: 3 }} >

                            Our mission is to offer you the best selection of Nordic design, whether well-established or up-and-coming.

                        </Typography>
                        <Box component="socialIcons" sx={{ mt: 5 }} >
                            <Link href="#">
                                <FacebookIcon sx={{ fontSize: "35px", marginRight: "10px", color: '#555555', fill: "#F78F2C" }} /></Link>
                            <Link href="#">
                                <YouTubeIcon sx={{ fontSize: "35px", marginRight: "10px", color: '#555555', fill: "#F78F2C" }} /></Link>
                            <Link href="#">
                                 <TwitterIcon sx={{ fontSize: "35px", marginRight: "10px", color: '#555555', fill: "#F78F2C" }} /></Link>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography component="h3" sx={{ color: '#2B2B2B', fontSize: "20px" }}>
                            Navigate
                        </Typography>
                        <List sx={{ mt: 5, py: 0 }}>

                            <ListItem disablePadding>
                                <Link href="/Home" underline="none" style={styles.footerLinkBox} >
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Home
                                    </Typography></Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" style={styles.footerLinkBox} underline="none">
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        About
                                    </Typography></Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" style={styles.footerLinkBox} underline="none">
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Contact
                                    </Typography></Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" style={styles.footerLinkBox} underline="none">
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Journal
                                    </Typography></Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" style={styles.footerLinkBox} underline="none">
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Catalog
                                    </Typography></Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                        <Typography component="h3" sx={{ color: '#2B2B2B', fontSize: "20px" }}>
                            Informations
                        </Typography>
                        <List sx={{ mt: 5, py: 0 }}>

                            <ListItem disablePadding>
                                <Link href="#" underline="none" style={styles.footerLinkBox}>
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Delivery
                                    </Typography>
                                </Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" underline="none" style={styles.footerLinkBox}>
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        Return policy
                                    </Typography></Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="#" underline="none" style={styles.footerLinkBox}>
                                    <ArrowForwardIosIcon style={styles.footerIcon} />
                                    <Typography component="span" style={styles.footerContent} sx={{ color: '#555555' }}>

                                        F.A.Q
                                    </Typography></Link>

                            </ListItem>

                        </List>


                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography component="h3" sx={{ color: '#2B2B2B', fontSize: "20px" }}>
                            Newsletter
                        </Typography>
                        <Typography component="p" style={styles.footerContent} sx={{ color: '#555555', mt: 5, py: 0 }}>

                            Subscribe to get notified about product launches, special offers and news.
                        </Typography>
                        <TextField id="outlined-basic" label="username@gmail.com" variant="outlined" sx={{ mt: 2, width: '100%', colr: 'grey' }} />
                        <Button size="small" variant="contained" sx={{ mt: 2, bgcolor: "#F78F2C", boxShadow: 0, px: "15px", py: "5px" }}>Subscribe</Button>
                    </Grid>
                </Grid>
                <Typography component="h6" sx={{ color: 'grey', display: 'flex', justifyContent: "center", alignContent: "center", py: 1, fontWeight: 100 }}>
                    @ 2024 haute.Developed by haute
                </Typography>
                <Button size="small" variant="contained" sx={{ bgcolor: "#F78F2C", boxShadow: 0, py: "5px" }} onClick={handleScrollToTop} style={styles.catOverlayTest}>
                    <ArrowUpwardIcon sx={{ fill: 'white' }} />
                </Button>
            </Container>
        </Box>

    )
}
