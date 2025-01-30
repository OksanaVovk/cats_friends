import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Тут можна додати логіку для аутентифікації
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h5" className={classes.title} sx={{}}>
          Register
        </Typography>
        <TextField
          label="Name*"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <TextField
          label="Email*"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          label="Password*"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

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
