import { Typography } from '@mui/material';

const ErrorMessage = ({ message }) => {
  return message ? (
    <Typography
      sx={{ color: 'red', fontSize: '0.875rem', marginTop: '0.2rem' }}
    >
      {message}
    </Typography>
  ) : null;
};

export default ErrorMessage;
