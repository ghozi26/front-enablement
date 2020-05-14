import React, { useState} from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  IconButton,
  Collapse,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import { sampleData } from "../data/dataTable";



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        "&:last-child": {
          paddingRight: 0,
        },
      },
    },
  },
});

const TableExpanded = (props) => {
  const [child2, setChild2] = useState({});
  const [child3, setChild3] = useState({});

  const changeExpand = (data) => {
    if (child2[data] === true) {
      setChild2({ [data]: false });
    } else {
      setChild2({ [data]: true });
    }
    console.log(child2);
  };

  const changeExpandChild3 = (data) => {
    if (child3[data] === true) {
      setChild3({ [data]: false });
    } else {
      setChild3({ [data]: true });
    }
    console.log(child3);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <TableContainer>
          <Table aria-label="simple table" padding={"none"}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", width: "150px" }}>KPI</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "200px" }}>-</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "100px" }}>Weighted</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "300px" }}>Baseline</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "200px" }}>Actual</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "200px" }}>Target</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "250px" }}>Gap</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Insentive</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id} style={{ height: "50px" }}>
                  <TableCell style={{ width: "10%", fontWeight: "bold" }}>{row.kpi}</TableCell>
                  {row.child1 === false ? (
                    <>
                      <TableCell>{row.space}</TableCell>
                      <TableCell style={{ width: "100px" }}>{row.weighted}</TableCell>
                      <TableCell style={{ width: "300px" }}>{row.baseline}</TableCell>
                      <TableCell style={{ width: "200px" }}>{row.actual}</TableCell>
                      <TableCell style={{ width: "200px" }}>{row.target}</TableCell>
                      <TableCell style={{ width: "250px" }}>{row.gap}</TableCell>
                      <TableCell>{row.incentive}</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell colSpan={7}>
                        <Table aria-label="simple table" padding={"none"}>
                          <TableBody>
                            {row.child1.map((e, i) => (
                              <>
                                <TableRow key={i} style={{ height: "50px" }}>
                                  <TableCell style={{ width: "200px" }}>{e.title1}</TableCell>
                                  <TableCell style={{ width: "100px" }}>{e.weighted1}</TableCell>
                                  <TableCell style={{ width: "300px" }}>{e.baseline1}</TableCell>
                                  <TableCell style={{ width: "200px" }}>{e.actual1}</TableCell>
                                  <TableCell style={{ width: "200px" }}>{e.target1}</TableCell>
                                  <TableCell style={{ width: "250px" }}>{e.gap1}</TableCell>
                                  <TableCell>
                                    {e.incentive1}
                                    {e.child2 !== false ? (
                                      <>
                                        <IconButton
                                          aria-label="expand"
                                          className={classes.margin}
                                          onClick={() => changeExpand(`${i}_child1_to_child2`)}
                                        >
                                          <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                      </>
                                    ) : null}
                                  </TableCell>
                                </TableRow>

                                {e.child2 !== false
                                  ? e.child2.map((d, idx) => (
                                      <>
                                        <TableRow
                                          key={idx}
                                          style={
                                            child2[`${i}_child1_to_child2`]
                                              ? { height: "50px" }
                                              : {}
                                          }
                                        >
                                          <TableCell colSpan={3}>
                                            <Collapse in={child2[`${i}_child1_to_child2`]}>
                                              {d.title2}
                                            </Collapse>
                                          </TableCell>
                                          <TableCell colSpan={4}>
                                            <Collapse in={child2[`${i}_child1_to_child2`]}>
                                              {d.actual2}
                                              {d.child3 !== false ? (
                                                <>
                                                  <IconButton
                                                    aria-label="expand"
                                                    className={classes.margin}
                                                    onClick={() =>
                                                      changeExpandChild3(`${idx}_child2_to_child3`)
                                                    }
                                                  >
                                                    <ArrowDropDownIcon fontSize="small" />
                                                  </IconButton>
                                                </>
                                              ) : null}
                                            </Collapse>
                                          </TableCell>
                                        </TableRow>
                                        {d.child3 !== false
                                          ? d.child3.map((dChild3, idxChild3) => (
                                              <TableRow
                                                key={idxChild3}
                                                style={
                                                  child3[`${idx}_child2_to_child3`]
                                                    ? { height: "50px" }
                                                    : {}
                                                }
                                              >
                                                <TableCell colSpan={3}>
                                                  <Collapse in={child3[`${idx}_child2_to_child3`]}>
                                                    {dChild3.title3}
                                                  </Collapse>
                                                </TableCell>
                                                <TableCell colSpan={4}>
                                                  <Collapse in={child3[`${idx}_child2_to_child3`]}>
                                                    {dChild3.actual3}
                                                  </Collapse>
                                                </TableCell>
                                              </TableRow>
                                            ))
                                          : null}
                                      </>
                                    ))
                                  : null}
                              </>
                            ))}
                          </TableBody>
                        </Table>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default TableExpanded;
