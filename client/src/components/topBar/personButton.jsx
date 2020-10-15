import React from "react";
import {NavLink} from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import Fab from "@material-ui/core/Fab";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab color="default" aria-label="Home" size="small" onClick={handleClick}>
        <PersonIcon />
      </Fab>    
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem component={NavLink} to={props.navList[0].path+`/${props.user.username}`} replace>
          <ListItemText primary="My Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Edit Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>{props.logout()}} >
          <ListItemText primary="Sign out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}