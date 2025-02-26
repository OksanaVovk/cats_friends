import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { catsSelectors } from '../redux/cats/catsSelectors';
import Blog from 'components/Blog';
import Loader from 'components/Loader';

const BlogPage = () => {
  const isLoading = useSelector(catsSelectors.selectCatsIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '50px 50px', lg: '100px 50px' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          A New Life Just One Step Away: Give a Home to an Animal
        </Typography>
        <Blog />
      </Box>
      ;
    </>
  );
};

export default BlogPage;
