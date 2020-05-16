import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import moment from "moment";

import MenuIcon from "@material-ui/icons/Menu";
import AccountIcon from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "../components/listItem";
import Copyright from "../components/Copyright";
import TabPanel from "../components/TabPanel";

import KPIStatus from "./KPIStatus";
import BarChartService from "../services/BarChartService";
import TableService from "../services/TableService";
import { Menu, MenuItem } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  tabs: {
    width: "100%",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
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
  menuButtonHidden: {
    display: "none",
  },
  title: {
    textAlign: "right",
    // flexGrow: 0.5,
    color: "#000",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "auto",
  },
  indicator: {
    backgroundColor: "#ff6d00",
    height: "3px",
  },
  label: {
    color: "#ff6d00",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [changePane, setChangePane] = React.useState(0);

  const [dataTable, setDataTable] = React.useState({});
  const [dataChart, setDataChart] = React.useState({});
  const [loadingChart, setLoadingChart] = React.useState(true);
  const [loadingTable, setLoadingTable] = React.useState(true);
  const [currentPeriode, setCurrentPeriode] = React.useState(1);
  const [historycalPeriode, setHistorycalPeriode] = React.useState(
    moment(new Date()).format("MM/DD/YYYY")
  );
  const [chartType, setChartType] = React.useState(0);
  const [inRevenuePoint, setInRevenuePoint] = React.useState(0);
  const [customize, setCustomize] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const hangleChangePane = (e, newValue) => {
    setChangePane(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const authCheck = React.useCallback(() => {
    let myStorage = localStorage.getItem("loggedIn");
    console.log(myStorage);
    return !myStorage ? props.history.push("Login") : false;
  }, [props.history]);

  const getBarChart = async () => {
    try {
      setLoadingChart(true);
      const response = await BarChartService(
        currentPeriode,
        moment(historycalPeriode).format("MM/DD/YYYY"),
        localStorage.getItem("salescode")
      );
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        if (response.data.status !== false) {
          const { datasets, labels } = response.data.result;
          console.log(response.data.result);
          const dataTransform = datasets.map((x) => ({ ...x, data: [x.data] }));
          let objData = {};
          objData["labels"] = labels;
          objData["datasets"] = dataTransform;
          console.log(objData);
          setDataChart(objData);
          setLoadingChart(false);
        } else {
          alert(response.data.result);
        }
      } else {
        alert("error");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  const getTable = async () => {
    try {
      setLoadingTable(true);
      const response = await TableService(
        currentPeriode,
        moment(historycalPeriode).format("MM/DD/YYYY"),
        localStorage.getItem("salescode")
      );
      if (response.status >= 200 && response.status < 300) {
        // console.log(response)
        console.log(response.data.result);
        setDataTable(response.data.result);
        setLoadingTable(false);
      } else {
        alert("error");
        setLoadingTable(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("error");
      setLoadingTable(false);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  React.useEffect(() => {
    authCheck();
    getBarChart();
    getTable();
  }, [authCheck, props]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
          <img src={"logodanamon.png"} alt="logo" width="110"></img>
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            style={{ textAlign: "right", marginLeft: "auto", marginRight: "30px" }}
          >
            Indicative Financial KPI Achievment : <span style={{ color: "#009688" }}>70%</span>
          </Typography>
          <Divider orientation={"vertical"} flexItem />
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            style={{ textAlign: "right", marginLeft: "30px", marginRight: "30px" }}
          >
            Total Indicative Incentive : <span style={{ color: "#ffb74d" }}>Rp 30.000.000</span>
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{ color: "#ffb74d", fontSize: "30px" }} />
            </Badge>
          </IconButton>
          <IconButton style={{ textAlign: "right" }} onClick={handleClick}>
            <AccountIcon style={{ fontSize: "30px" }} />
          </IconButton>
        </Toolbar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{ width: "1500px" }}
        >
          <MenuItem onClick={handleClose}>
            Code Sales = {localStorage.getItem("salescode")}
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={"xl"} className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Typography
                  component="h2"
                  variant="h5"
                  color="inherit"
                  gutterBottom
                  style={{
                    marginTop: "10px",
                    marginLeft: "20px",
                    fontWeight: "bold",
                  }}
                >
                  KPI Information
                </Typography>
                <div style={{ marginTop: "20px" }}>
                  <Tabs
                    value={changePane}
                    className={classes.tabs}
                    classes={{ indicator: classes.indicator }}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="inherit"
                    onChange={hangleChangePane}
                  >
                    <Tab label="KPI Status" style={{ color: "#ff6d00", fontWeight: "bold" }} />
                    <Tab label="Simulation" style={{ color: "#ff6d00", fontWeight: "bold" }} />
                    <Tab
                      label="Product Recommendation"
                      style={{ color: "#ff6d00", fontWeight: "bold" }}
                    />
                    <Tab
                      label="Top Selling Product"
                      style={{ color: "#ff6d00", fontWeight: "bold" }}
                    />
                  </Tabs>
                </div>

                <TabPanel value={changePane} index={0}>
                  <KPIStatus
                    dataChart={dataChart}
                    loadingChart={loadingChart}
                    loadingTable={loadingTable}
                    dataTable={dataTable}
                    currentPeriode={currentPeriode}
                    setCurrentPeriode={setCurrentPeriode}
                    historycalPeriode={historycalPeriode}
                    setHistorycalPeriode={setHistorycalPeriode}
                    chartType={chartType}
                    setChartType={setChartType}
                    inRevenuePoint={inRevenuePoint}
                    setInRevenuePoint={setInRevenuePoint}
                    customize={customize}
                    setCustomize={setCustomize}
                    getBarChart={getBarChart}
                    getTable={getTable}
                  />
                </TabPanel>
                <TabPanel value={changePane} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={changePane} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={changePane} index={3}>
                  Item Four
                </TabPanel>
              </Paper>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
