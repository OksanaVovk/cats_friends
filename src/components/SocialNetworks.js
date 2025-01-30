import { List, ListItemButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialNetworks = () => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "8px 0 8px 0",
        width: 100,
      }}
    >
      <ListItemButton
        sx={{
          padding: 0,
        }}
      >
        <FacebookIcon
          sx={{
            fill: (theme) => theme.palette.light.main,
          }}
        />
      </ListItemButton>
      <ListItemButton
        sx={{
          padding: 0,
        }}
      >
        <TwitterIcon sx={{ fill: (theme) => theme.palette.light.main }} />
      </ListItemButton>
      <ListItemButton
        sx={{
          padding: 0,
        }}
      >
        <InstagramIcon
          sx={{
            fill: (theme) => theme.palette.light.main,
          }}
        />
      </ListItemButton>
    </List>
  );
};
export default SocialNetworks;
