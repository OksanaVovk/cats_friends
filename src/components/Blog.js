import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { catsSelectors } from '../redux/cats/catsSelectors';

const Blog = () => {
  const itemData = useSelector(catsSelectors.selectCats);
  const isError = useSelector(catsSelectors.selectCatsError);
  const location = useLocation();

  useEffect(() => {
    if (!itemData.length) return;

    const id = location.hash.slice(1);
    if (!id) return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [itemData, location.hash]);
  return (
    <>
      {isError ? (
        <Typography gutterBottom variant="h5">
          Request error
        </Typography>
      ) : (
        <List>
          {itemData.map(item => (
            <Box
              id={item._id}
              key={item._id}
              sx={{ padding: { xs: '20px', md: '50px' } }}
            >
              <Card
                sx={{
                  maxWidth: 900,
                  margin: '0 auto',
                  boxShadow: 3,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt="Cat Image"
                    sx={{
                      height: '300px',
                      width: { xs: '100%', sm: '300px' },
                      objectFit: 'cover',
                      borderRadius: '8px 0 0 8px',
                    }}
                  />
                </Box>

                <Box>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.gender}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.age} months
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ marginBottom: '10px' }}
                    >
                      {item.weight} kg
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.text}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </List>
      )}
    </>
  );
};

export default Blog;
