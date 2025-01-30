import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyledMenu from './StyledMenu';
import { Link as RouterLink } from 'react-router-dom';
import { Button, MenuItem, MenuList, Link } from '@mui/material';

const MenuLarge = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MenuList
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
      }}
    >
      <MenuItem>
        <Link component={RouterLink} to="/">
          HOME
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={RouterLink} to="volonteer">
          VOLONTEER
        </Link>
      </MenuItem>
      <MenuItem>
        <Button
          id="demo-customized-button"
          aria-controls={isOpen ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            fontSize: 14,
            fontWeight: 400,
            backgroundColor: 'transparent',
            color: theme => theme.palette.dark.main,
          }}
        >
          Stories
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={isOpen}
          onClick={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <Link component={RouterLink} to="blog">
              Blog
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Link component={RouterLink} to="podcast">
              Podcast
            </Link>
          </MenuItem>
        </StyledMenu>
      </MenuItem>
      <MenuItem>
        <Link component={RouterLink} to="login">
          LOGIN
        </Link>
      </MenuItem>
    </MenuList>
  );
};
export default MenuLarge;
