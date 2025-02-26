import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 40,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.black.main,
  fontSize: 14,
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white.main,
  },
}));

export default StyledButton;
