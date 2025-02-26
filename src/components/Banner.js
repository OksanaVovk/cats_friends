import { Box, Typography } from '@mui/material';
import StyledButton from './StyledButton';

const Banner = () => {
  const onBtnClick = () => {
    window.open(
      'https://www.google.com/search?q=притулок+для+тварин+україна',
      '_blank'
    );
  };
  return (
    <Box
      sx={{
        padding: { xs: '40px 30px 50px 30px', md: '60px 50px 100px 50px' },
        display: 'flex',
        marginTop: '7px',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        flex: 1,
      }}
    >
      <Box
        sx={{
          marginRight: { md: '30px' },
        }}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/banner-cat1.webp'}
          alt="cat"
          style={{ width: '100%', objectFit: 'contain' }}
          loading="lazy"
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginBottom: { xs: '20px', md: '25px' },
          }}
        >
          Our motto
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: { xs: '20px', md: '25px' },
            fontSize: { xs: '2.5rem', md: '4rem' },
          }}
        >
          Help animals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: { xs: '20px', md: '25px' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </Typography>
        <StyledButton onClick={onBtnClick}>Donate</StyledButton>
      </Box>
    </Box>
  );
};
export default Banner;
