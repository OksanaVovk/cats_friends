import { AppBar, Toolbar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuLarge from './MenuLarge';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconNavigation from './IconNavigation';
import MenuSmall from './MenuSmall';

const Header = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <AppBar
      sx={{
        backgroundColor: theme => theme.palette.body_bg.main,
        position: 'static',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isMobile && <MenuSmall />}
        <Link
          component={RouterLink}
          to="/"
          variant="h1"
          sx={{
            display: 'inline-block',
            fontFamily: 'Allison ,cursive',
            fontSize: { xs: '32px', md: '64px', lg: '96px' },
            fontWeight: 400,
            width: 'auto',
            textAlign: { xs: 'center', md: 'start' },
            color: theme => theme.palette.primary.main,
          }}
        >
          Cats & friends
        </Link>
        {!isMobile && <MenuLarge />}
        {!isMobile && <IconNavigation color={'light'} />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
