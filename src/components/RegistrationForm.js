import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from '../redux/auth/operations';
import { TextField, Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from 'schemas/register';
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
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

function RegistrationForm() {
  const classes = useStyles();
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async data => {
    try {
      await dispatch(authOperations.register(data)).unwrap();
      reset();
      setRegisterError('');
      navigate('/login', { replace: true });
    } catch (error) {
      setRegisterError(error || 'Register failed. Please try again.');
    }
  };

  return (
    <Box className={classes.root}>
      {registerError && (
        <Typography sx={{ color: 'red', marginBottom: '30px' }}>
          {registerError}
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Typography variant="h5" className={classes.title} sx={{}}>
          Register
        </Typography>
        <TextField
          label="Name*"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('name')}
        />
        <ErrorMessage message={errors.name?.message} />

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
          REGISTER
        </Button>
      </form>
    </Box>
  );
}

export default RegistrationForm;
