import { Avatar, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSelectors';
import AvatarDownload from './AvatarDownload';
import { url } from '../servises/api';

const Account = () => {
  const user = useSelector(authSelector.selectUser);
  const avatarUrl = user.avatarUrl;
  const avatarUrlServer =
    avatarUrl?.startsWith('http') || avatarUrl?.includes('gravatar.com')
      ? avatarUrl
      : `${url.replace(/\/$/, '')}${avatarUrl}`;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: { xs: 'center', md: 'flex-start' },
            marginBottom: { xs: '50px', md: '0px' },
          }}
        >
          <Avatar
            alt="my avatar"
            src={avatarUrlServer}
            sx={{
              width: 200,
              height: 200,
              marginRight: { xs: '0px', md: '100px' },
              marginBottom: { xs: '50px', md: '50px' },
            }}
          />
          <AvatarDownload />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: '40px',
            }}
          >
            {user.name}
          </Typography>
          <Typography variant="h6">{user.email}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Account;
