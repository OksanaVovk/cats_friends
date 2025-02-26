import StyledButton from './StyledButton';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/operations';
import { useState } from 'react';

const AvatarDownload = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    if (event.target.files.length === 0) {
      alert('Please select a file first!');
      return;
    }
    setFile(event.target.files[0]);
  };
  const onDownloadClick = async event => {
    event.preventDefault();
    dispatch(authOperations.updateAvatar(file));
  };

  return (
    <Box
      component="form"
      encType="multipart/form-data"
      onSubmit={onDownloadClick}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <StyledButton
        type="submit"
        sx={{
          width: '100px',
          height: '30px',
          fontSize: '12px',
          marginTop: { xs: '20px', sm: '0px' },
        }}
      >
        Upload
      </StyledButton>
    </Box>
  );
};

export default AvatarDownload;
