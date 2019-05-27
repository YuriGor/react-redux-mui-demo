import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { navObjects } from "./nav";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

function RenderNavItem(n, classes, pathname, showWIP) {
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    (!n.WIP || showWIP) &&
    (n.to ? (
      <ListItem
        button
        key={n.text}
        to={n.to}
        component={RouterLink}
        selected={n.to === pathname}
      >
        <ListItemIcon>{n.icon}</ListItemIcon>
        <ListItemText primary={n.text} />
      </ListItem>
    ) : (
      <React.Fragment key={n.text}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{n.icon}</ListItemIcon>
          <ListItemText primary={n.text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} key={n.text + "--"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {n.children.map(c => (
              <ListItem
                selected={c.to === pathname}
                key={c.text}
                button
                to={c.to}
                component={RouterLink}
                className={classes.nested}
                disabled={c.disabled}
              >
                <ListItemIcon>{c.icon}</ListItemIcon>
                <ListItemText primary={c.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    ))
  );
}

function SideMenu(props) {
  // console.log(props.location.pathname);
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      {navObjects.map(n =>
        RenderNavItem(n, classes, props.location.pathname, props.showWIP)
      )}
    </List>
  );
}

export default withRouter(SideMenu);
