import { Box } from '@mui/material';
import Account from 'components/Account';

const AccountPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'flex-start' },
        padding: { xs: '50px 50px', md: '150px 100px' },
      }}
    >
      <Account />
    </Box>
  );
};
export default AccountPage;
