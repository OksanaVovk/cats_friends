import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { List, ListItemButton } from "@mui/material";
const IconNavigation = ({ color }) => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ListItemButton
        sx={{
          borderRight: (theme) => `solid 1px ${theme.palette[color].main}`,
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
          justifyContent: "center",
        }}
      >
        <FavoriteIcon sx={{ fill: (theme) => theme.palette[color].main }} />
      </ListItemButton>
      <ListItemButton
        sx={{
          borderRight: (theme) => `solid 1px ${theme.palette[color].main}`,
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
          justifyContent: "center",
        }}
      >
        <PersonIcon sx={{ fill: (theme) => theme.palette[color].main }} />
      </ListItemButton>
      <ListItemButton
        sx={{
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
          justifyContent: "center",
        }}
      >
        <NotificationsIcon
          sx={{
            fill: (theme) => theme.palette[color].main,
          }}
        />
      </ListItemButton>
    </List>
  );
};

export default IconNavigation;
