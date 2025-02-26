import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import VolonteerList from 'components/VolonteersList';
import { useSelector, useDispatch } from 'react-redux';
import { getVolonteers } from '../redux/volonteers/operations';
import { volonteersSelectors } from '../redux/volonteers/volonteersSelectors';
import Loader from 'components/Loader';

const VolonteersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVolonteers());
  }, [dispatch]);
  const isLoading = useSelector(volonteersSelectors.selectVolonteersIsLoading);

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
          gutterBottom
          variant="h4"
          sx={{ marginBottom: { xs: '30px', md: '50px', lg: '70px' } }}
        >
          Our volunteers
        </Typography>
        <VolonteerList />
      </Box>
    </>
  );
};

export default VolonteersPage;
