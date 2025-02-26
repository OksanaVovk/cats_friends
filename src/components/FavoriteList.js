import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import ContentItem from './ContentItem';

import { Typography, ImageList, useMediaQuery } from '@mui/material';

const FavoriteList = () => {
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
  const user = useSelector(authSelector.selectUser);
  const favoriteList = user.favorite || [];
  return (
    <>
      {favoriteList.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          You don't have any favorite images yet.
        </Typography>
      ) : (
        <ImageList
          sx={{ width: '100%' }}
          cols={getCols()}
          rowHeight="auto"
          gap={12}
          variant="masonry"
        >
          {favoriteList.map(item => (
            <ContentItem
              key={item.id}
              img={item.img}
              title={item.title}
              id={item.id}
            />
          ))}
        </ImageList>
      )}
    </>
  );
};

export default FavoriteList;
