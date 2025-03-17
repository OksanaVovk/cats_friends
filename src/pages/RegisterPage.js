import RegistrationForm from 'components/RegistrationForm';
import { Box } from '@mui/material';

const RegisterPage = () => {
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
      <RegistrationForm />
    </Box>
  );
};
export default RegisterPage;
