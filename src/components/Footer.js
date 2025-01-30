import { Box, Typography, useMediaQuery } from "@mui/material";
import SocialNetworks from "./SocialNetworks";
import IconNavigation from "./IconNavigation";
const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.black.main }}>
      <Box
        sx={{
          color: (theme) => theme.palette.light.main,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "start",
          justifyContent: "space-between",
          padding: { xs: "30px", md: "50px" },
          borderBottom: (theme) => `solid 1px ${theme.palette.light.main}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "50%" },
            marginRight: { lg: "10%" },
            marginBottom: { xs: "35px", lg: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontSize: "1rem",
              marginBottom: "10px",
            }}
          >
            About us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: "15px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </Typography>
          <SocialNetworks />
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            flexDirection: "row",
            alignItems: "start",
            width: { xs: "100%", lg: "50%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: { xs: "35px", sm: 0 },
              marginRight: { sm: "55%", lg: "30%" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontSize: "1rem",
                marginBottom: "15px",
              }}
            >
              Information
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "10px",
              }}
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "10px",
              }}
            >
              Privacy & Policy
            </Typography>
            <Typography variant="body2">Terms & Policy</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontSize: "1rem",
                marginBottom: "15px",
              }}
            >
              My account
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "10px",
              }}
            >
              Initiatives and projects
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "10px",
              }}
            >
              Favorite animals
            </Typography>
            <Typography variant="body2">My accounts</Typography>
          </Box>
        </Box>
      </Box>
      {isMobile && <IconNavigation color={"primary"} />}
    </Box>
  );
};

export default Footer;
