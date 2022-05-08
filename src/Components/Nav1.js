import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  prop: {
    height: '100%',
    width: '8vw',
    fontSize: '1.7rem',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'blue',
    }
    ,
  },
  propa: {
    height: '100%',
    width: '8vw',
    fontSize: '1.7rem',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2px',
    color: 'black',
    '&:hover': {
      backgroundColor: 'blue',
      color: 'white',
    },
  },
  active: {
    color: "red",
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  mobileNavView :{
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },


  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Nav1(props) {
  // {props.search}


  const [value, setValue] = React.useState()
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  let ID = 1;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const handleSearch}

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} className={classes.mobileNavView}> <Link className='' to='/profile'>About</Link></MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.mobileNavView}> <Link className='' to='/login'>Logout</Link></MenuItem>
    </Menu>
  );
  <IconButton
    edge="end"
    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit"
  >
    <AccountCircle />
  </IconButton>
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/movies'>Movies</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link to='/featured'>Featured</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/tvseries'>TV_Series</Link>
      </MenuItem >
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/dubbed'>Dubbed</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/geners'>Geners</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/request'>Request</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/upload'>Upload</Link>
      </MenuItem>
      <MenuItem className={classes.mobileNavView}>
        <Link  to='/profile'>Profile</Link>
      </MenuItem>
    </Menu>
  );

  const handleSearch = (event, newValue) => {
    props.search(event.target.value)
  }

  return (
    <div className={classes.grow}>

      <h1>{props.search}</h1>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h6" noWrap onClick={handleSearch} >
            CornFlix
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={value}
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.prop} to='/movies'>Movies</Link>
            <Link className={classes.prop} to='/featured'>Featured</Link>
            <Link className={classes.prop} to='/tvseries'>TV_Series</Link>
            <Link className={classes.prop} to='/dubbed'>Dubbed</Link>
            <Link className={classes.prop} to='/geners'>Geners</Link>
            <Link className={classes.prop} to='/request'>Request</Link>
            <Link className={classes.prop} to='/hindi'>Upload</Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            {/* <Link className='nav-item nav-link active' to='/about'>About</Link> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
