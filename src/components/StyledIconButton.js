import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default StyledIconButton;
