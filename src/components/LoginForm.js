import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/operations';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from 'schemas/login';
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.black.main,
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.white.main,
    },
  },
}));

function LoginForm() {
  const [loginError, setLoginError] = useState('');
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = async data => {
    try {
      await dispatch(authOperations.logIn(data)).unwrap();
      reset();
      setLoginError('');
    } catch (error) {
      setLoginError(error || 'Login failed. Please try again.');
    }
  };

  return (
    <Box className={classes.root}>
      {loginError && (
        <Typography sx={{ color: 'red', marginBottom: '30px' }}>
          {loginError}
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Typography variant="h5" className={classes.title}>
          Log in
        </Typography>

        <TextField
          label="Email*"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('email')}
        />
        <ErrorMessage message={errors.email?.message} />

        <TextField
          label="Password*"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          {...register('password')}
        />
        <ErrorMessage message={errors.password?.message} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
        >
          LOG IN
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
