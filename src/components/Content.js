import { useSelector } from 'react-redux';
import { catsSelectors } from '../redux/cats/catsSelectors';
import ContentItem from './ContentItem';
import Loader from './Loader';
import { ImageList, Typography, useMediaQuery, Box } from '@mui/material';

const Content = () => {
  const isXs = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(
    theme => theme.breakpoints.up('sm') && theme.breakpoints.down('md')
  );
  const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    return 3;
  };

  const itemData = useSelector(catsSelectors.selectCats);
  const isError = useSelector(catsSelectors.selectCatsError);
  const isLoading = useSelector(catsSelectors.selectCatsIsLoading);

  return (
    <Box
      sx={{
        padding: { xs: '30px 30px 50px 30px', md: '50px' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Waiting for their owners
      </Typography>
      {isLoading && <Loader />}
      {isError ? (
        <Typography gutterBottom variant="h5">
          Request error
        </Typography>
      ) : (
        <ImageList
          sx={{ width: '100%' }}
          gap={12}
          cols={getCols()}
          variant="masonry"
        >
          {itemData.map(item => (
            <ContentItem
              key={item._id}
              img={item.img}
              title={item.title}
              id={item._id}
            />
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Content;
