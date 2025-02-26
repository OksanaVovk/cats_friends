import { Box, Typography, List, ListItem } from '@mui/material';
const WebsiteInformation = () => {
  return (
    <Box sx={{ margin: 'auto', textAlign: 'left' }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
        }}
      >
        This website was built using the following technologies:
      </Typography>
      <List>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>Frontend:</strong> React, React Router, Material UI
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>State Management:</strong> Redux Toolkit
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>Backend:</strong> Node.js, Express
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>Database:</strong> MongoDB
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>Authentication:</strong> JWT (JSON Web Token)
          </Typography>
        </ListItem>
        <ListItem sx={{ padding: '15px 0px' }}>
          <Typography>
            <strong>File Handling:</strong> Multer (for avatar uploads)
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};
export default WebsiteInformation;
