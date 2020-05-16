import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import moment from "moment";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import TableExpanded from "../components/TableExpanded";

import { dataBarChart, dataPieChart } from "../data/dataChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 120,
    width: "100%",
  },
  formControlInline: {
    margin: theme.spacing(0.5),
    minWidth: 120,
    width: "100%",
  },
}));

const KPIStatus = (props) => {
  const classes = useStyles();

  const {
    currentPeriode,
    setCurrentPeriode,
    historycalPeriode,
    setHistorycalPeriode,
    chartType,
    setChartType,
    inRevenuePoint,
    setInRevenuePoint,
    customize,
    setCustomize,
    getBarChart,
    getTable,
    loadingTable,
    dataTable,
  } = props;

  // const [currentPeriode, setCurrentPeriode] = React.useState(0);
  // const [historycalPeriode, setHistorycalPeriode] = React.useState(new Date());
  // const [chartType, setChartType] = React.useState(0);
  // const [inRevenuePoint, setInRevenuePoint] = React.useState(0);
  // const [customize, setCustomize] = React.useState(0);

  const handleChangeCurrentPeriode = (e) => {
    setCurrentPeriode(e.target.value);
  };

  const handleChangeHistorycalPeriode = (date) => {
    setHistorycalPeriode(date);
  };

  const handleChangeChartType = (e) => {
    setChartType(e.target.value);
  };

  const handleChangeInRevenuePoint = (e) => {
    setInRevenuePoint(e.target.value);
  };

  const hangleChangeCustomize = (e) => {
    setCustomize(e.target.value);
  };

  React.useEffect(() => {
    console.log(props);
  }, [props]);

  const renderChart = () => {
    console.log(chartType);
    let chart;
    if (chartType === 1 || chartType === 0) {
      chart = <BarChart data={props.dataChart} legendPosition={"bottom"} textTitle={""} />;
      // chart = <BarChart data={dataBarChart} legendPosition={"bottom"} textTitle={""} />;
    } else if (chartType === 2) {
      chart = <PieChart data={dataPieChart} />;
    }
    return chart;
  };

  const reRenderChartAndTable = async () => {
    await getBarChart()
    await getTable()
  } 

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} sm={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Periode</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={currentPeriode}
            onChange={handleChangeCurrentPeriode}
            label="Periode"
          >
            <MenuItem value={0}>-- Pilih Periode --</MenuItem>
            <MenuItem value={1}>Daily</MenuItem>
            <MenuItem value={2}>Monthly</MenuItem>
            <MenuItem value={3}>Yearly</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item xs={12} md={4} sm={12}>
          <KeyboardDatePicker
            style={{ width: "100%", marginTop: "4px" }}
            disableToolbar
            inputVariant="outlined"
            variant="inline"
            format="MM/dd/yyyy"
            margin="none"
            id="date-picker-inline"
            label="Start Date"
            value={historycalPeriode}
            onChange={handleChangeHistorycalPeriode}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <Grid item xs={12} md={4} sm={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label"
            style={{ backgroundColor: "white", paddingRight: "3px" }}
          >
            Chart Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chartType}
            onChange={handleChangeChartType}
            label="Periode"
          >
            <MenuItem value={0}>-- Pilih Chart Type --</MenuItem>
            <MenuItem value={1}>Bar</MenuItem>
            <MenuItem value={2}>Pie</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4} sm={4} md={4} align={'center'} justify={'center'}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{width:'50%'}}
              startIcon={<SlideshowIcon />}
              onClick={reRenderChartAndTable}
            >
              Show
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography
          component="h2"
          variant="h6"
          color="textPrimary"
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "50px",
          }}
          gutterBottom
        >
          Actual KPI Percentage as of {moment(new Date()).format("DD MMMM YYYY")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography
          component="h2"
          variant="h6"
          color="textPrimary"
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Total KPI Achievement
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography
          component="h2"
          variant="h6"
          color="textPrimary"
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          75%
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        {props.loadingChart ? <div>Loading</div> : renderChart()}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container direction="row">
          <Grid item xs={8} md={8} sm={8}>
            <div style={{ width: "30%" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ backgroundColor: "#fff", paddingRight: "3px" }}
                >
                  In Revenue Point
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inRevenuePoint}
                  onChange={handleChangeInRevenuePoint}
                  label="Periode"
                >
                  <MenuItem value={0}>-- Pilih In Revenue Point --</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2} md={2} sm={2}>
            <div style={{ width: "80%" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ backgroundColor: "#fff", paddingRight: "3px" }}
                >
                  Customize
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={customize}
                  onChange={hangleChangeCustomize}
                  label="Periode"
                >
                  <MenuItem value={0}>-- Pilih --</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          {/* <Grid item xs={2} md={2} sm={2}>
            <div style={{ width: "80%" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Customize</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chartType}
                  onChange={handleChangeInRevenuePoint}
                  label="Periode"
                >
                  <MenuItem value={0}>-- - --</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <div style={{ marginTop: "100px" }}>
          <TableExpanded loadingTable={loadingTable} dataTable={dataTable} />
        </div>
      </Grid>
    </Grid>
  );
};

KPIStatus.propTypes = {};

export default KPIStatus;
