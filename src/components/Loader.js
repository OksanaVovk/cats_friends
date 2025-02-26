import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(33, 33, 33, 0.12)',
        opacity: 1,
        transition:
          'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <CircularProgress
        sx={{
          width: {
            xs: '50px !important',
            sm: '100px !important',
            md: '120px !important',
          },
          height: {
            xs: '50px !important',
            sm: '75px !important',
            md: '120px !important',
          },
        }}
      />
    </Box>
  );
};

export default Loader;
