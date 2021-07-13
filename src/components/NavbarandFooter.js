import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import {Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, Container} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {ListItem, ListItemText, ListItemIcon, Button, Box} from '@material-ui/core';
import {Link, Help, Home, Info, ContactSupport } from '@material-ui/icons';

import ReactTooltip from 'react-tooltip';
import './CombinedCSS.css'

import SearchCriteriaComponent from './SearchCriteria';

const drawerWidth = 280;

const StyledButton = withStyles({
  root: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    padding: '0 18px',
    fontSize: 14,
    fontWeight: 'bold'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
const StyledButton1 = withStyles({
  root: {
    background: 'transparent',
    border: 'none',
    color: 'blue',
    padding: '0 18px',
    fontSize: 14,
    fontWeight: 'bold'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: { marginRight: 36,},
  hide: { display: 'none',},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  globalHeading: {
fontWeight: 'bold',
fontStyle: 'italic', 
fontSize: 18
    },
    navbarContainer: {display: 'flex',justifyContent: 'space-between',alignItems: 'center'}
}));

export default function MiniDrawer() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => { 
    setOpen(true); 
  };
  const handleDrawerClose = () => { setOpen(false); };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })} >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer"
            onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, {[classes.hide]: open, })}>
            <MenuIcon />
          </IconButton>
          <Container className={classes.navbarContainer}>
            <Typography noWrap className={classes.globalHeading}> Global PLM Document Web Viewer </Typography>
            <List className='search-criteria-list'>
                <StyledButton> Welcome: Narasimha </StyledButton> |
                <StyledButton> Contact Us </StyledButton> |
                <StyledButton> Log Off </StyledButton>
            </List>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent"
        className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })}
        classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open,}),}}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
            <ListItem>
              <ListItemIcon> <Link /> </ListItemIcon>
              <ListItemText component='p' primary='Quick Links' style={{fontSize: '18px'}}/>
            </ListItem>

        <List>
            <ListItem button>
              <ListItemIcon> <Home fontSize = 'small'/> </ListItemIcon>
              <div style={{ width: 200, whiteSpace: 'nowrap' }}>
                  <Box component="div" textOverflow="ellipsis" overflow="hidden" className='link-headings' data-tip='Home'> <ReactTooltip/> Home </Box>
              </div>
            </ListItem>
            <ListItem button>
              <ListItemIcon> <Info fontSize='small'/> </ListItemIcon>
              <div style={{ width: 180, whiteSpace: 'nowrap' }}>
                <Box component="div" textOverflow="ellipsis" overflow="hidden" className='link-headings' data-tip='Global PLM Information Center'> <ReactTooltip/> Global PLM Information Center </Box>
              </div>
            </ListItem>
        </List>

        <Divider />
            <ListItem>
              <ListItemIcon> <Help fontSize='small'/> </ListItemIcon>
              <ListItemText primary = 'Help'/>
            </ListItem>

        <List>
            <ListItem button>
              <ListItemIcon> <ContactSupport fontSize='small'/> </ListItemIcon>
              <div style={{ width: 200, whiteSpace: 'nowrap' }}>
                <Box component="div" textOverflow="ellipsis" overflow="hidden" className='link-headings' data-tip='Training & Contact'> <ReactTooltip/> Training & Contact </Box>
              </div>
            </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
            <SearchCriteriaComponent/>

        <List className='search-criteria-list1'>
          <StyledButton1> Copyright </StyledButton1> |
          <StyledButton1> 3M Internal Use Only </StyledButton1> |
          <StyledButton1> Narasimha </StyledButton1>
        </List>
      </main>
    </div>
    
  );
}