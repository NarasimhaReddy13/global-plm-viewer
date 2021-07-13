import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchCriteria from "../SearchCriteria";
import { Link, Button, Box } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ListIcon from "@material-ui/icons/List";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import "/home/theia/global-plm-app/global-plm-viewer/node_modules/react-tooltip/dist/index.js";
import ReactTooltip from "react-tooltip";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(1) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        style={{
          backgroundColor: "#ffffff",
          color: "black",
        }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "50px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{ fontStyle: "italic" }}>
              Global Plm Document Web Viewer
            </Typography>
          </div>
          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button disabled>WELCOME:</Button>
            <span>|</span>
            <Link>Contact Us</Link>
            <span>|</span>
            <Link>Log Off</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            style={{ backgroundColor: "#9bc4cc", marginBottom: "10px" }}
          >
            <ListItemIcon>{<ListIcon fontSize="small" />}</ListItemIcon>
            <ListItemText>Quick Links</ListItemText>
          </ListItem>
          <ListItem component="a" href="#">
            <ListItemIcon>{<HomeIcon fontSize="small" />}</ListItemIcon>
            <div style={{ width: 160, whiteSpace: "nowrap" }}>
              <Box
                component="div"
                textOverflow="ellipsis"
                overflow="hidden"
                data-tip="Home"
              >
                <ReactTooltip />
                Home
              </Box>
            </div>
          </ListItem>
          <ListItem component="a" href="#">
            <ListItemIcon>{<InfoIcon fontSize="small" />}</ListItemIcon>
            <div style={{ width: 160, whiteSpace: "nowrap" }}>
              <Box
                component="div"
                textOverflow="ellipsis"
                overflow="hidden"
                data-tip="Global PLM Information Center"
              >
                <ReactTooltip />
                Global PLM Information Center
              </Box>
            </div>
          </ListItem>
        </List>
        <Divider />
        <List className="line-clamp">
          <ListItem
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              backgroundColor: "#9bc4cc",
              marginBottom: "10px",
            }}
          >
            <ListItemIcon>
              {<ContactSupportOutlinedIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText style={{ fontWeight: "bold" }}>Help</ListItemText>
          </ListItem>
          <ListItem component="a" href="#">
            <ListItemIcon>
              {<FiberManualRecordIcon fontSize="small" />}
            </ListItemIcon>
            {/* <ListItemText color="primary">Training & Contact</ListItemText> */}
            <div style={{ width: 160, whiteSpace: "nowrap" }}>
              <Box
                component="div"
                textOverflow="ellipsis"
                overflow="hidden"
                data-tip="Training & Contact"
              >
                <ReactTooltip />
                Training & Contact
              </Box>
            </div>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div style={{ marginLeft: "10px" }}>
          <SearchCriteria />
        </div>
      </main>
    </div>
  );
}
