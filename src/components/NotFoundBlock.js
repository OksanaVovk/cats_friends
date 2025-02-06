import { Box } from '@mui/material';
export const NotFoundBlock = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      404 NotFound
    </Box>
  );
};
