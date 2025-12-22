import Content from 'components/Content';
import Banner from 'components/Banner';
import { Box } from '@mui/material';

const MainPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Banner />
      <Content />
    </Box>
  );
};
export default MainPage;
