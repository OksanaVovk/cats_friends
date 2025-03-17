import LoginForm from 'components/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: { xs: '0px 10px', lg: '0px 0px' },
      }}
    >
      <LoginForm />
      <Typography
        variant="body1"
        sx={{
          fontSize: '24px',
          marginTop: '30px',
        }}
      >
        Don't have an account?{' '}
        <Link
          component={RouterLink}
          to="/register"
          sx={{
            fontSize: '24px',
            color: theme => theme.palette.primary.main,
            fontWeight: 'bold',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
              color: theme => theme.palette.secondary.main,
            },
          }}
        >
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
