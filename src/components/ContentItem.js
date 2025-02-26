import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from '../redux/auth/operations';
import { authSelector } from '../redux/auth/authSelectors';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-hot-toast';
import { ImageListItem } from '@mui/material';
import StyledImageItemBar from './StyledImageItemBar';
import StyledIconButton from './StyledIconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRef } from 'react';

const ContentItem = ({ img, title, id }) => {
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const user = useSelector(authSelector.selectUser);
  const likeButtonRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      const isFavorite = user.favorite.some(fv => fv.id === id);
      likeButtonRef.current.classList.toggle('active', isFavorite);
    }
  }, [isLoggedIn, user, id, likeButtonRef]);

  const onLikeClick = (event, id) => {
    event.stopPropagation();
    if (!isLoggedIn) {
      toast.error(
        'Only authorized users can add an image to favorites. Please log in.',
        {
          duration: 6000,
          position: 'top-right',
        }
      );
      navigate('/login');
    } else {
      dispatch(authOperations.updateFavorite({ catsId: id }));
      likeButtonRef.current.classList.toggle('active');
    }
  };

  return (
    <ImageListItem key={id}>
      <HashLink
        smooth
        to={`/blog#${id}`}
        style={{
          textDecoration: 'none',
          cursor: 'pointer',
          display: 'block',
          overflow: 'hidden',
        }}
      >
        <img
          src={`${img}?w=164&h=164&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            display: 'block',
          }}
        />
      </HashLink>

      <StyledImageItemBar
        title={title}
        position="bottom"
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        actionIcon={
          <StyledIconButton
            onClick={event => onLikeClick(event, id)}
            aria-label={`like ${title}`}
            sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
            ref={likeButtonRef}
          >
            <FavoriteIcon />
          </StyledIconButton>
        }
      />
    </ImageListItem>
  );
};

export default ContentItem;
