import { ImageListItemBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImageItemBar = styled(ImageListItemBar)(({ theme }) => ({
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
}));

export default StyledImageItemBar;
