import { Box, Typography, useMediaQuery, Link } from '@mui/material';
import SocialNetworks from './SocialNetworks';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import IconNavigation from './IconNavigation';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.black.main,
        flexShrink: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          color: theme => theme.palette.light.main,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'start',
          justifyContent: 'space-between',
          padding: { xs: '30px', md: '50px' },
          width: '100%',
          maxWidth: '1700px',
          borderBottom: theme => `solid 1px ${theme.palette.light.main}`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', lg: '50%' },
            marginRight: { lg: '10%' },
            marginBottom: { xs: '35px', lg: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              fontSize: '1rem',
              marginBottom: '10px',
            }}
          >
            About us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: '15px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </Typography>
          <SocialNetworks />
        </Box>
        <Box
          sx={{
            display: { xs: 'block', sm: 'flex' },
            flexDirection: 'row',
            alignItems: 'start',
            width: { xs: '100%', lg: '50%' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: { xs: '35px', sm: 0 },
              marginRight: { sm: '55%', lg: '30%' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                fontSize: '1rem',
                marginBottom: '15px',
              }}
            >
              <Link
                component={RouterLink}
                to="info"
                sx={{ color: theme => theme.palette.light.main }}
              >
                Information
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
              }}
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
              }}
            >
              Privacy & Policy
            </Typography>
            <Typography variant="body2">Terms & Policy</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                fontSize: '1rem',
                marginBottom: '15px',
              }}
            >
              <Link
                component={RouterLink}
                to={isLoggedIn ? 'account' : 'login'}
                sx={{ color: theme => theme.palette.light.main }}
              >
                My account
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
              }}
            >
              Initiatives and projects
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: '10px',
              }}
            >
              <Link
                component={RouterLink}
                to="favorite"
                sx={{ color: theme => theme.palette.light.main }}
              >
                Favorite animals
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                component={RouterLink}
                to={isLoggedIn ? 'account' : 'login'}
                sx={{ color: theme => theme.palette.light.main }}
              >
                My accounts
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      {isMobile && <IconNavigation color={'primary'} />}
    </Box>
  );
};

export default Footer;
