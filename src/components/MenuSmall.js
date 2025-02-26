import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from '../redux/auth/authSelectors';
import authOperations from '../redux/auth/operations';

import {
  Box,
  IconButton,
  Modal,
  MenuItem,
  MenuList,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuSmall = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOutClick = async () => {
    try {
      await dispatch(authOperations.logOut()).unwrap();
      setOpen(false);
      navigate('/login');
    } catch {
      navigate('/login');
    }
  };

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 300,
    height: '100vh',
    bgcolor: theme => theme.palette.primary.main,
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <IconButton size="large" onClick={handleModalOpen}>
        <MenuIcon
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        />
      </IconButton>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <Box sx={style}>
            <MenuList
              sx={{
                flexDirection: 'column',
              }}
            >
              <MenuItem
                sx={{
                  borderBottom: theme =>
                    `solid 1px ${theme.palette.light.main}`,
                }}
              >
                <Link component={RouterLink} to="/" onClick={handleModalClose}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  borderBottom: theme =>
                    `solid 1px ${theme.palette.light.main}`,
                }}
              >
                <Link
                  component={RouterLink}
                  to="volonteers"
                  onClick={handleModalClose}
                >
                  Volonteer
                </Link>
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  width: '100%',

                  borderBottom: theme =>
                    `solid 1px ${theme.palette.light.main}`,
                }}
              >
                <Accordion
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    backgroundColor: 'transparent',
                    textTransform: 'none',
                    width: '100%',
                    border: 'none',
                    boxShadow: 'none',

                    color: theme => theme.palette.dark.main,
                  }}
                  defaultExpanded={false}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    data-testid="AccordionSummary"
                  >
                    <Typography sx={{ fontSize: '14px' }}>Stories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <MenuList>
                      <MenuItem
                        onClick={handleModalClose}
                        disableRipple
                        sx={{
                          borderBottom: theme =>
                            `solid 1px ${theme.palette.light.main}`,
                          borderTop: theme =>
                            `solid 1px ${theme.palette.light.main}`,
                        }}
                      >
                        <Link component={RouterLink} to="blog">
                          Blog
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={handleModalClose}
                        disableRipple
                        sx={{
                          borderBottom: theme =>
                            `solid 1px ${theme.palette.light.main}`,
                        }}
                      >
                        <Link component={RouterLink} to="podcast">
                          Podcast
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </AccordionDetails>
                </Accordion>
              </MenuItem>
              {!isLoggedIn ? (
                <MenuItem
                  sx={{
                    borderBottom: theme =>
                      `solid 1px ${theme.palette.light.main}`,
                  }}
                >
                  <Link
                    onClick={handleModalClose}
                    component={RouterLink}
                    to="login"
                  >
                    Login
                  </Link>
                </MenuItem>
              ) : (
                <MenuItem>
                  <Link onClick={onLogOutClick}>Logout</Link>
                </MenuItem>
              )}
              <MenuItem
                sx={{
                  borderBottom: theme =>
                    `solid 1px ${theme.palette.light.main}`,
                }}
              >
                <Link
                  onClick={handleModalClose}
                  component={RouterLink}
                  to="info"
                >
                  Contact Us
                </Link>
              </MenuItem>
            </MenuList>
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default MenuSmall;
