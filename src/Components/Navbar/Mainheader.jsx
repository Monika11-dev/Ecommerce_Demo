import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import UserContext from '../../ContextAPI/UserContext';
import CartContext from '../../ContextAPI/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css';

const styles = {
  cartBtn: {
    borderColor: 'lightgrey',
    color: 'grey',
  },
  totalBox: {
    position: 'absolute',
    bottom: 20,
    padding: 16,

  }
}

const pages = ['home', 'shop', 'blog', 'contact'];

function Mainheader() {

  const {username} = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    navigate("/Login");
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#FFFFFF', px: 4 }}>

      <Toolbar disableGutters>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/Home"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            color: '#F78F2C',
            textDecoration: 'none',
            textAlign: 'center',
            mr:0,
          }}
        >
          haute
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' }}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
              }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{display: { xs: 'block', md: 'none'} }}
          >
           
            {pages.map((page) => (
                <MenuItem key={page} sx={{ width:'200px'}} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
           
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/Home"
          sx={{
            mr: 0,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#F78F2C',
            textDecoration: 'none',
           
          }}
        >
          haute
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' }, justifyContent: { sm: 'center', md: 'flex-end', lg: 'flex-end' }, mx: 5 }}>
          <Link
            to="/Home"
            underline="none"
            className="navLink"
          
          >
            home
          </Link>
          <Link
            to="/"
            underline="none"
            className="navLink"
          
          >
            shop
          </Link>
          <Link
            to="/"
            underline="none"
            className="navLink"
          
          >
            blog
          </Link>
          <Link
           to="/"
            underline="none"
            className="navLink"
          >
            contact
          </Link>


        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open search" >
            <IconButton sx={{ p: 0 }}>
              <SearchIcon sx={{ color: '#6e6e6e', ml: 1, fontWeight: 'regular' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Open user account" >
            <IconButton sx={{ p: 0 }}
              onClick={handleOpenUserMenu}
            >
              <PersonOutlineIcon sx={{ color: '#6e6e6e', ml: 1 }} />
            </IconButton>
          </Tooltip>

          <IconButton sx={{ p: 0 }} onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon sx={{ color: '#6e6e6e', ml: 1 }} />
            </Badge>

          </IconButton>
          <Drawer open={open} anchor={'right'} onClose={toggleDrawer(false)} sx={{ position: 'relative' }}>
            <Box sx={{ width: 350, px: 1, py: 2 }} role="presentation">
              <Grid container spacing={12}>
                <Grid size={{ xs: 7, lg: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component="span" gutterBottom sx={{ py: 1 }} >Shopping Cart ({cart.length})</Typography>
                </Grid>
                <Grid size={{ xs: 5, lg: 5 }} sx={{ p: 0 }}>
                  <Button onClick={toggleDrawer(false)}><CloseIcon sx={{ fill: 'black' }} /></Button>

                </Grid>
              </Grid>

              <Divider sx={{ my: 1 }} />

              {cart.map((item) => (
                <Grid key={item.id} container spacing={4} sx={{ mt: 2 }} >

                  <Grid size={{ xs: 2, lg: 2 }}>
                    <img src={item.productImage} style={{ width: "50px", height: "50px" }}></img>
                  </Grid>
                  <Grid size={{ xs: 6, lg: 6 }}>
                    <Grid container>
                      <Grid size={{ lg: 12 }}>
                        <Typography>{item.productName}</Typography>
                      </Grid>
                      <Grid size={{ lg: 12 }}>
                        <ButtonGroup variant="outlined" size="small" aria-label="Basic button group" sx={{ mr: 2, mt: 1 }}>
                          <Button style={styles.cartBtn} onClick={() => decrementQuantity(item.id)}>-</Button>
                          <Button style={styles.cartBtn} sx={{ cursor: 'default', disableRipple: "true" }} disableElevation="true">{item.quantity}</Button>
                          <Button style={styles.cartBtn} onClick={() => incrementQuantity(item.id)}>+</Button>
                        </ButtonGroup>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid size={{ xs: 4, lg: 4 }}>
                    <Typography>Rs. {" "}{item.productPrice * item.quantity}</Typography>
                    <Button onClick={() => removeFromCart(item.id)}><DeleteIcon sx={{ fill: 'red' }} /></Button>
                  </Grid>

                </Grid>
              ))}

              <Box component='section' style={styles.totalBox}>
                <Grid container rowSpacing={3} columnSpacing={12}>

                  <Grid size={{ xs: 7, sm: 7, md: 7, lg: 7 }}>Subtotal</Grid>
                  <Grid size={{ xs: 5, sm: 5, md: 5, lg: 5 }}>Rs. {" "} {totalPrice}</Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ textAlign: "right" }} >
                    <Link underline="none" to="/Checkout" className='checkoutBtn' sx={{ px: 2, py: 1, borderRadius: "4px", bgcolor: "orange", color: "white" }}>Checkout</Link>
                  </Grid>

                </Grid>
              </Box>

            </Box>
          </Drawer>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem >
              <Typography>{username}</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography>Logout</Typography>
            </MenuItem>

          </Menu>
        </Box>
      </Toolbar>

    </AppBar>
  );
}
export default Mainheader;

