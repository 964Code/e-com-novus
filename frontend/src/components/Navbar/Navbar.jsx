import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BiCart } from 'react-icons/bi';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'About'];

function Navbar() {
  const [anchorElAdmin, setAnchorElAdmin] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);

  const handleOpenAdminMenu = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };

  const handleOpenMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseAdminMenu = () => {
    setAnchorElAdmin(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  // Change this variable to update the cart item count
  const cartItemCount = 5;

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', ml: 1 }}
              >
                <Link
                  to={`/${page.replace(/\s/g, '')}`}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-hamburger'
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Link
                    to={`/${page.replace(/\s/g, '')}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='admin menu'
            sx={{ mr: 2 }}
            onClick={handleOpenAdminMenu}
          >
            <IoIosAddCircleOutline />
          </IconButton>
          <Menu
            id='menu-admin'
            anchorEl={anchorElAdmin}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElAdmin)}
            onClose={handleCloseAdminMenu}
          >
            <MenuItem
              key='Add Products'
              onClick={handleCloseAdminMenu}
              component={Link}
              to='/addproducts'
            >
              Add Products
            </MenuItem>
          </Menu>

          <IconButton size='large' edge='end' color='inherit'>
            <Badge badgeContent={cartItemCount} color='error'>
              <BiCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
