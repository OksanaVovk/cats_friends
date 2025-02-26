import { Box, Typography } from '@mui/material';
const PodcastPage = () => {
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
      <Typography variant="h4" gutterBottom>
        Coming Soon!
      </Typography>
      <Typography variant="h6" color="textSecondary">
        This page will be updated soon. Stay tuned!
      </Typography>
    </Box>
  );
};

export default PodcastPage;
