import { Box } from '@mui/material';
import WebsiteInformation from 'components/WebsiteInformation';

const InfoPage = () => {
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
      <WebsiteInformation />
    </Box>
  );
};
export default InfoPage;
