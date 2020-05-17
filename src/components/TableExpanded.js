import React, { useState, useEffect } from "react";
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

  let dumpArray = []

  const changeExpand = (data, childArray) => {
    console.log(childArray)
    
    if(Object.keys(child3).length === 0){
      console.log('kosong')
      console.log(child3)
      if (child2[data] === true) {
        console.log('kosong true')
        for(let i = 0; i < childArray.length; i++){
          if(child3[`${childArray[i].title2.replace(/ /g, "")}`]){
            setChild3({...child3, [childArray[i].title2.replace(/ /g, "")] : false})
          }
        }
        setChild2({...child2, [data]: false });
      } else {
        console.log('kosong false')
        setChild2({...child2, [data] : true})
      }

    }else{
      console.log(child3)
      console.log('isi')
      if(Object.keys(child2).length === 0){
        console.log('isi true')
        setChild2({ ...child2, [data]: true });
        for(let i = 0; i < childArray.length; i++){
          if(child3[`${childArray[i].title2.replace(/ /g, "")}`]){
            setChild3({...child3, [childArray[i].title2.replace(/ /g, "")] : false})
          }
        }
      }else{
        console.log('isi false')
        if(child2[data] === true){
          for(let i = 0; i < childArray.length; i++){
            if(child3[`${childArray[i].title2.replace(/ /g, "")}`]){
              setChild3({...child3, [childArray[i].title2.replace(/ /g, "")] : false})
            }
          }
          setChild2({...child2, [data]: false})
        }else{
          console.log('sini cou')
          for(let i = 0; i < childArray.length; i++){
            if(child3[`${childArray[i].title2.replace(/ /g, "")}`]){
              setChild3({...child3, [childArray[i].title2.replace(/ /g, "")] : false})
            }
          }
          setChild2({...child2, [data]: true})
        }

      }
    }
  };


  const changeExpandChild3 = (data) => {
    if (child3[data] === true) {
      setChild3({ ...child3, [data]: false });
    } else {
      setChild3({ ...child3, [data]: true });
    }
  };

  const classes = useStyles();

  if (loadingTable) {
    return <div style={{textAlign:'center', fontSize:'20px', marginBottom:'100px'}}>Loading</div>;
  }

  if(!Array.isArray(dataTable)){
    return(<div style={{textAlign:'center', fontSize:'20px', marginBottom:'100px'}}>Data Not Found</div>)
  }

  return (
    <React.Fragment>
      <button onClick={() => console.log(child2)}>test</button>
      {/* <button onClick={() => console.log(children)}>children</button> */}
      <MuiThemeProvider theme={theme}>
        <TableContainer>
          <Table aria-label="simple table" padding={"none"}>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", width: "150px" }}>KPI</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "350px" }}>-</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "150px" }}>Weighted</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "150px" }}>Baseline</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "150px" }} align={'right'}>Actual</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "150px" }} align={'right'}>Target</TableCell>
                <TableCell style={{ fontWeight: "bold", width: "150px" }} align={'right'}>Gap</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align={'right'}>Incentive</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.map((row, idxParent) => (
                <TableRow key={`${idxParent}-parent`} style={{ height: "50px" }}>
                  <TableCell style={{ width: "10%", fontWeight: "bold" }}>{row.kpi}</TableCell>
                  {!Array.isArray(row.child1) ? (
                    <>
                      <TableCell style={{ width: "350px" }}>{row.space}</TableCell>
                      <TableCell style={{ width: "150px" }}>{row.weighted}</TableCell>
                      <TableCell style={{ width: "150px" }}>{row.baseline}</TableCell>
                      <TableCell style={{ width: "150px" }} align={'right'}>{row.actual}</TableCell>
                      <TableCell style={{ width: "150px" }} align={'right'}>{row.target}</TableCell>
                      <TableCell style={{ width: "150px" }} align={'right'}>{row.gap}</TableCell>
                      <TableCell style={{ width: "150px" }} align={'right'}>{row.incentive}</TableCell>
                    </>
                  ) : (
                    <>  
                      <TableCell colSpan={7}>
                        <Table aria-label="simple table" padding={"none"}>
                          <TableBody>
                            {row.child1.map((e, idxChild1) => (
                              <>
                                <TableRow key={`${e.id}-child1`} style={{ height: "50px" }} id={`${e.title1.replace(/ /g, "")}`}>
                                  <TableCell style={{ width: "350px" }}>
                                    {Array.isArray(e.child2) ? (
                                      <>
                                        <IconButton
                                          aria-label="expand"
                                          className={classes.margin}
                                          onClick={() =>
                                            // changeExpand(`${e.title1.replace(/ /g, "")}`, e.child2)
                                            changeExpand(`${e.title1.replace(/ /g, "")}`, e.child2)
                                          }
                                        >
                                          <ArrowDropDownIcon fontSize="small" />
                                        </IconButton>
                                      </>
                                    ) : (
                                      <>
                                      <IconButton
                                        aria-label="expand"
                                        className={classes.margin}
                                        color={'white'}
                                        style={{color:'#fff', backgroundColor:'#fff'}}
                                      >
                                        <ArrowDropDownIcon fontSize="small" />
                                      </IconButton>
                                    </>
                                    )}
                                    {e.title1} -child1
                                  </TableCell>
                                  <TableCell style={{ width: "150px" }}>{e.weighted1}</TableCell>
                                  <TableCell style={{ width: "150px" }}>{e.baseline1}</TableCell>
                                  <TableCell style={{ width: "150px" }} align={'right'}>{e.actual1}</TableCell>
                                  <TableCell style={{ width: "150px" }} align={'right'}>{e.target1}</TableCell>
                                  <TableCell style={e.gap1.includes('-') ? { width: "150px", color:'red' } : {width: "150px", color:'green'}} align={'right'}>{e.gap1}</TableCell>
                                  <TableCell style={{ width: "150px" }} align={'right'}>{e.incentive1}</TableCell>
                                </TableRow>

                                {Array.isArray(e.child2)
                                  ? e.child2.map((d, idxChild2) => (
                                      <>

                                        <TableRow
                                          id={`${d.PK_FRONT_GROUP_REVENUE_POINT_ID}_${d.title2.replace(/ /g, "")}`}
                                          key={`${idxChild2}-child2`}
                                          style={
                                            child2[`${idxChild1}_child1_to_child2`]
                                              ? { height: "50px" }
                                              : {}
                                          }
                                        >
                                          <TableCell colSpan={3}>
                                            <Collapse in={child2[`${e.title1.replace(/ /g, "")}`]} style={Array.isArray(d.child3) ? {paddingLeft:'15px'} : {paddingLeft:'50px'}}>
                                              {Array.isArray(d.child3) ? (
                                                <>
                                                  <IconButton
                                                    aria-label="expand"
                                                    className={classes.margin}
                                                    onClick={() =>
                                                      changeExpandChild3(
                                                        `${d.title2.replace(/ /g, "")}`
                                                      )
                                                    }
                                                  >
                                                    <ArrowDropDownIcon fontSize="small" />
                                                  </IconButton>
                                                </>
                                              ) : null
                                              }
                                              {d.title2}
                                            </Collapse>
                                          </TableCell>
                                          <TableCell align={'right'}>
                                            <Collapse in={child2[`${e.title1.replace(/ /g, "")}`]}>
                                              {d.actual2}
                                            </Collapse>
                                          </TableCell>
                                          <TableCell colSpan={3} align={'justify'}>
                                            {/* <Collapse in={child2[`${idxChild1}_child1_to_child2`]}>
                                              {d.actual2}
                                            </Collapse> */}
                                          </TableCell>
                                        </TableRow>



                                        {Array.isArray(d.child3)
                                          ? d.child3.map((dChild3, idxChild3) => (
                                              <TableRow
                                                key={idxChild3}
                                                style={
                                                  child3[`${d.title2.replace(/ /g, "")}`]
                                                    ? { height: "50px" }
                                                    : {}
                                                }
                                                id={`${d.title2.replace(/ /g, "")}`}
                                              >
                                                <TableCell colSpan={3}>
                                                  <Collapse
                                                    in={child3[`${d.title2.replace(/ /g, "")}`]}
                                                    style={{paddingLeft:'70px'}}
                                                  >
                                                    {dChild3.title3}
                                                  </Collapse>
                                                </TableCell>
                                                <TableCell colSpan={1} align={'right'}>
                                                  <Collapse
                                                    in={child3[`${d.title2.replace(/ /g, "")}`]}
                                                  >
                                                    {dChild3.actual3}
                                                  </Collapse>
                                                </TableCell>
                                                <TableCell colSpan={3}>
                                                  {/* <Collapse
                                                    in={child3[`${idxChild2}_child2_to_child3`]}
                                                  >
                                                    {dChild3.actual3}
                                                  </Collapse> */}
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
