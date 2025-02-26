import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { List, ListItemButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';

const IconNavigation = ({ color }) => {
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const navigate = useNavigate();

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <ListItemButton
        sx={{
          borderRight: theme => `solid 1px ${theme.palette[color].main}`,
          paddingLeft: { lg: '25px' },
          paddingRight: { lg: '25px' },
          justifyContent: 'center',
        }}
        onClick={() => navigate('/favorite', { replace: true })}
      >
        <FavoriteIcon
          sx={{
            fill: theme => theme.palette[color].main,
            transition: 'fill 0.2s ease-in-out',
            '&:hover': {
              fill: theme => theme.palette.secondary.main,
            },
          }}
        />
      </ListItemButton>
      <ListItemButton
        sx={{
          borderRight: theme => `solid 1px ${theme.palette[color].main}`,
          paddingLeft: { lg: '25px' },
          paddingRight: { lg: '25px' },
          justifyContent: 'center',
        }}
        onClick={
          isLoggedIn
            ? () => navigate('/account', { replace: true })
            : () => navigate('/login', { replace: true })
        }
      >
        <PersonIcon
          sx={{
            fill: theme => theme.palette[color].main,
            transition: 'fill 0.2s ease-in-out',
            '&:hover': {
              fill: theme => theme.palette.secondary.main,
            },
          }}
        />
      </ListItemButton>
      <ListItemButton
        sx={{
          paddingLeft: { lg: '25px' },
          paddingRight: { lg: '25px' },
          justifyContent: 'center',
        }}
        onClick={() => navigate('/info', { replace: true })}
      >
        <NotificationsIcon
          sx={{
            fill: theme => theme.palette[color].main,
            transition: 'fill 0.2s ease-in-out',
            '&:hover': {
              fill: theme => theme.palette.secondary.main,
            },
          }}
        />
      </ListItemButton>
    </List>
  );
};

export default IconNavigation;
