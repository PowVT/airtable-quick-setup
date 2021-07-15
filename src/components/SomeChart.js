import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const SomeChart = ({ siteData, getData }) => {

    const useStyles = makeStyles({
        table: {
          width: 850,
        },
    });

    const classes = useStyles();

    const [ rows, setRows ] = useState([]);

    function setTable(siteData) {
        for(var i=0; i < siteData.length;i++){
            rows.push(siteData[i]["fields"])
        }
        console.log(rows)
        getData()
    }
    
    return(
        <div align='center'>
            <div style={{margin:'12px'}}>
                <Button
                variant="contained" 
                color="primary"
                onClick={() => {
                    getData();
                    console.log(siteData)
                }}
                >Update Data
                </Button>
            </div>
            <div style={{margin:'12px'}}>
                <Button
                variant="contained" 
                color="primary"
                onClick={() => {
                    setTable(siteData);
                }}
                >Create Table
                </Button>
            </div>
            <h2 >Purchase At Site</h2>
            <TableContainer component={Paper} style={{width:"850px", background:'#cccccc'}}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="middle">Site&nbsp;</TableCell>
                        <TableCell align="right">Weight&nbsp;(g)</TableCell>
                        <TableCell align="right">Purity&nbsp;</TableCell>
                        <TableCell align="right">Max Price&nbsp;($)</TableCell>
                        <TableCell align="right">Price Paid&nbsp;($)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row["Date and Time"]}
                        </TableCell>
                        <TableCell align="right">{row["Site Name"]}</TableCell>
                        <TableCell align="right">{row["Weight"]}</TableCell>
                        <TableCell align="right">{row["Purity"]}</TableCell>
                        <TableCell align="right">{row["Max Price - LBMA Fix"]}</TableCell>
                        <TableCell align="right">{row["Price Paid"]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SomeChart