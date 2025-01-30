import { Box, Typography } from "@mui/material";
import StyledButton from "./StyledButton";

const Banner = () => {
  return (
    <Box
      sx={{
        padding: { xs: "40px 30px 50px 30px", md: "60px 50px 100px 50px" },
        display: "flex",
        marginTop: "64.5px",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginRight: { md: "30px" },
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/banner-cat1.png"}
          alt="cat"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
          }}
        >
          Our motto
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}
        >
          Help animals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </Typography>
        <StyledButton>Donate</StyledButton>
      </Box>
    </Box>
  );
};
export default Banner;
