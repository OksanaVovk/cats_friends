import {
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import { itemData } from "./data";
import StyledImageItemBar from "./StyledImageItemBar";
import StyledIconButton from "./StyledIconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Content = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(
    (theme) => theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    return 3;
  };

  return (
    <Box
      sx={{
        padding: { xs: "30px 30px 50px 30px", md: "50px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Waiting for their owners
      </Typography>
      <ImageList
        sx={{
          width: "100%",
        }}
        gap={12}
        cols={getCols()}
        variant="masonry"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={
                process.env.PUBLIC_URL +
                `${item.img}?w=164&h=164&fit=crop&auto=format`
              }
              alt={item.title}
              loading="lazy"
            />
            <StyledImageItemBar
              title={item.title}
              position="bottom"
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              actionIcon={
                <StyledIconButton
                  aria-label={`like ${item.title}`}
                  sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  <FavoriteIcon />
                </StyledIconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default Content;
