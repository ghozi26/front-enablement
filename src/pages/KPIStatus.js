import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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

  const [currentPeriode, setCurrentPeriode] = React.useState(0);
  const [historycalPeriode, setHistorycalPeriode] = React.useState(0);
  const [chartType, setChartType] = React.useState(0);
  const [inRevenuePoint, setInRevenuePoint] = React.useState(0);
  const [customize, setCustomize] = React.useState(0);

  const handleChangeCurrentPeriode = (e) => {
    setCurrentPeriode(e.target.value);
  };

  const handleChangeHistorycalPeriode = (e) => {
    setHistorycalPeriode(e.target.value);
  };

  const handleChangeChartType = (e) => {
    setChartType(e.target.value);
  };

  const handleChangeInRevenuePoint = (e) => {
    setInRevenuePoint(e.target.value);
  };

  const hangleChangeCustomize = (e) => {
    setCustomize(e.target.value)
  }

  const renderChart = () => {
    console.log(chartType);
    let chart;
    if (chartType === 1 || chartType === 0) {
      chart = <BarChart data={dataBarChart} legendPosition={"bottom"} textTitle={""} />;
    } else if (chartType === 2) {
      chart = <PieChart data={dataPieChart} />;
    }
    return chart;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} sm={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Current Periode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
      <Grid item xs={12} md={4} sm={12}>
        <Grid container direction="row">
          <Grid item xs={11} md={11} sm={11}>
            <FormControl variant="outlined" className={classes.formControlInline}>
              <InputLabel id="demo-simple-select-label">Historical Periode</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={historycalPeriode}
                onChange={handleChangeHistorycalPeriode}
                label="Periode"
              >
                <MenuItem value={0}>-- Pilih Historical --</MenuItem>
                {/* <MenuItem value={1}>Daily</MenuItem>
                <MenuItem value={2}>Monthly</MenuItem>
                <MenuItem value={3}>Yearly</MenuItem> */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1} md={1} sm={1}>
            <IconButton color="secondary" aria-label="add an alarm" style={{ marginTop: "5px" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} sm={12}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Chart Type</InputLabel>
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
          Actual KPI Percentage as of 24 January 2020
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
        {renderChart()}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container direction="row">
          <Grid item xs={8} md={8} sm={8}>
            <div style={{ width: "30%" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">In Revenue Point</InputLabel>
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
                <InputLabel id="demo-simple-select-label">Customize</InputLabel>
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
          <TableExpanded />
        </div>
      </Grid>
    </Grid>
  );
};

KPIStatus.propTypes = {};

export default KPIStatus;
