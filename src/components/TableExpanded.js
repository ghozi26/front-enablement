import React, { useState } from "react";
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

  const { dataTable, loadingTable } = props;

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

  if (loadingTable) {
    return <div>loading</div>;
  }

  if(!Array.isArray(dataTable)){
    return(<div>Data Not Found</div>)
  }

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
              {dataTable.map((row, idxParent) => (
                <TableRow key={`${idxParent}-parent`} style={{ height: "50px" }}>
                  <TableCell style={{ width: "10%", fontWeight: "bold" }}>{row.kpi}</TableCell>
                  {!Array.isArray(row.child1) ? (
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
                            {row.child1.map((e, idxChild1) => (
                              <>
                                <TableRow key={`${idxChild1}-child1`} style={{ height: "50px" }}>
                                  <TableCell style={{ width: "200px" }}>
                                    {Array.isArray(e.child2) ? (
                                      <>
                                        <IconButton
                                          aria-label="expand"
                                          className={classes.margin}
                                          onClick={() =>
                                            changeExpand(`${idxChild1}_child1_to_child2`)
                                          }
                                        >
                                          <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                      </>
                                    ) : null}
                                    {e.title1}
                                  </TableCell>
                                  <TableCell style={{ width: "100px" }}>{e.weighted1}</TableCell>
                                  <TableCell style={{ width: "300px" }}>{e.baseline1}</TableCell>
                                  <TableCell style={{ width: "200px" }}>{e.actual1}</TableCell>
                                  <TableCell style={{ width: "200px" }}>{e.target1}</TableCell>
                                  <TableCell style={{ width: "250px" }}>{e.gap1}</TableCell>
                                  <TableCell>{e.incentive1}</TableCell>
                                </TableRow>

                                {Array.isArray(e.child2)
                                  ? e.child2.map((d, idxChild2) => (
                                      <>
                                        <TableRow
                                          key={`${idxChild2}-child2`}
                                          style={
                                            child2[`${idxChild1}_child1_to_child2`]
                                              ? { height: "50px" }
                                              : {}
                                          }
                                        >
                                          <TableCell colSpan={3}>
                                            <Collapse in={child2[`${idxChild1}_child1_to_child2`]} style={Array.isArray(d.child3) ? {paddingLeft:'15px'} : {paddingLeft:'50px'}}>
                                              {Array.isArray(d.child3) ? (
                                                <>
                                                  <IconButton
                                                    aria-label="expand"
                                                    className={classes.margin}
                                                    onClick={() =>
                                                      changeExpandChild3(
                                                        `${idxChild2}_child2_to_child3`
                                                      )
                                                    }
                                                  >
                                                    <ArrowDropDownIcon fontSize="small" />
                                                  </IconButton>
                                                </>
                                              ) : null}
                                              {d.title2}
                                            </Collapse>
                                          </TableCell>
                                          <TableCell colSpan={4}>
                                            <Collapse in={child2[`${idxChild1}_child1_to_child2`]}>
                                              {d.actual2}
                                            </Collapse>
                                          </TableCell>
                                        </TableRow>
                                        {Array.isArray(d.child3)
                                          ? d.child3.map((dChild3, idxChild3) => (
                                              <TableRow
                                                key={idxChild3}
                                                style={
                                                  child3[`${idxChild2}_child2_to_child3`]
                                                    ? { height: "50px" }
                                                    : {}
                                                }
                                              >
                                                <TableCell colSpan={3}>
                                                  <Collapse
                                                    in={child3[`${idxChild2}_child2_to_child3`]}
                                                    style={{paddingLeft:'70px'}}
                                                  >
                                                    {dChild3.title3}
                                                  </Collapse>
                                                </TableCell>
                                                <TableCell colSpan={4}>
                                                  <Collapse
                                                    in={child3[`${idxChild2}_child2_to_child3`]}
                                                  >
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
