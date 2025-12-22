import { AppBar, Toolbar, Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import { Link as RouterLink } from 'react-router-dom';
import MenuLarge from './MenuLarge';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconNavigation from './IconNavigation';
import MenuSmall from './MenuSmall';

const Header = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const user = useSelector(authSelector.selectUser);

  return (
    <AppBar
      sx={{
        backgroundColor: theme => theme.palette.body_bg.main,
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1700px',
        }}
      >
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
        {isMobile && isLoggedIn && (
          <Typography sx={{ fontSize: '12px', fontStyle: 'italic' }}>
            Hello {user.name}
          </Typography>
        )}
        {!isMobile && <MenuLarge />}

        {!isMobile && isLoggedIn && (
          <Typography
            sx={{
              position: 'absolute',
              bottom: { md: '0px', lg: '5px' },
              right: '20px',
              fontSize: { md: '12px', lg: '14px' },
              fontStyle: 'italic',
              color: theme => theme.palette.primary.main,
            }}
          >
            Hello {user.name}
          </Typography>
        )}
        {!isMobile && <IconNavigation color={'light'} />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
