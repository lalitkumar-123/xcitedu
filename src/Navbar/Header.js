import React, { useState, useEffect } from "react"
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Drawer,Link,MenuItem} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Link as RouterLink } from "react-router-dom"

const headersData = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "PAID FEATURES",
    href: "/PaidFeatures",
  },
  {
    label: "COURSES",
    href: "/Courses",
  },
  {
    label: "BLOGS",
    href: "/Blogs",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#080808",               // "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    position: "fixed",
    overflow: "hidden",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 500,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    marginLeft: "38px",
    '&:hover': {
      textDecoration: "none",
      color: "inherit",
    }
  },
  toolbar: {
    display: "flex",
    marginLeft: "-60px",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    marginTop: "4vh",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {xciteduLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{xciteduLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none"},
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const xciteduLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      XCITEDU
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            key: label,
            color: "inherit",
            to: href,
            style: { textDecoration: "none" },
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Link>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}