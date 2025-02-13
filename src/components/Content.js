import { useSelector } from 'react-redux';
import { catsSelectors } from '../redux/cats/catsSelectors';
import { HashLink } from 'react-router-hash-link';

import {
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material';

import StyledImageItemBar from './StyledImageItemBar';
import StyledIconButton from './StyledIconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

  const onLikeClick = event => {
    event.stopPropagation();
    console.log('click');
  };

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
            <ImageListItem key={item._id}>
              <HashLink
                smooth
                to={`/blog#${item._id}`}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  display: 'block',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </HashLink>

              <StyledImageItemBar
                title={item.title}
                position="bottom"
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                actionIcon={
                  <StyledIconButton
                    onClick={onLikeClick}
                    aria-label={`like ${item.title}`}
                    sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    <FavoriteIcon />
                  </StyledIconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Content;
