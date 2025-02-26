import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import FavoriteList from 'components/FavoriteList';

const FavoritePage = () => {
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '50px 50px', lg: '100px 50px' },
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{ marginBottom: { xs: '30px', md: '50px', lg: '70px' } }}
      >
        Favorite cats
      </Typography>
      {isLoggedIn ? (
        <FavoriteList />
      ) : (
        <Typography>
          Only authorized users can add an image to favorites. Please{' '}
          <Link
            component={RouterLink}
            to="/login"
            sx={{ color: theme => theme.palette.secondary.main }}
          >
            log in
          </Link>
          .
        </Typography>
      )}
    </Box>
  );
};
export default FavoritePage;
