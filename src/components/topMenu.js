import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import { navObjects } from "./nav";
import { withRouter } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

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
      horizontal: "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
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

function CustomizedMenus(n, pathname, showWIP) {
  return (
    (!n.WIP || showWIP) &&
    (n.to ? (
      <IconButton
        key={n.text}
        color={n.to === pathname ? "secondary" : "inherit"}
        aria-label={n.text}
        to={n.to}
        component={RouterLink}
      >
        {n.icon}
      </IconButton>
    ) : (
      <div key={n.text}>
        <PopupState variant="popover" popupId="simple-menu">
          {popupState => (
            <React.Fragment>
              <IconButton
                {...bindTrigger(popupState)}
                color={
                  n.children.filter(c => c.to === pathname).length
                    ? "secondary"
                    : "inherit"
                }
              >
                {n.icon}
              </IconButton>
              <StyledMenu {...bindMenu(popupState)}>
                {n.children.map(c => (
                  <StyledMenuItem
                    onClick={popupState.close}
                    key={c.text}
                    to={c.to}
                    component={RouterLink}
                    disabled={c.disabled}
                    selected={c.to === pathname}
                  >
                    <ListItemIcon>{c.icon}</ListItemIcon>
                    <ListItemText primary={c.text} />
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    ))
  );
}

function TopMenu(props) {
  return (
    <>
      {navObjects.map(n =>
        CustomizedMenus(n, props.location.pathname, props.showWIP)
      )}
    </>
  );
}

export default withRouter(TopMenu);
