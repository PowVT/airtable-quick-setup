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
          width: 650,
        },
    });

    const classes = useStyles();

    const [  rows, setRows ] = useState([]);
   
    function setTable(siteData) {
        for(var i=0; i < siteData.length;i++){
            let barcode = siteData[i]["fields"]["Site Name"];
            let weight = siteData[i]["fields"]["Weight"];
            let purity = siteData[i]["fields"]["Purity"];
            let maxPrice = siteData[i]["fields"]["Max Price - LBMA Fix"];
            let pricePaid = siteData[i]["fields"]["Price Paid"];
            rows.push({barcode,weight,purity,maxPrice,pricePaid})
        }
        console.log(rows)
        getData()
    }
    
    return(
        <div >
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
            <TableContainer component={Paper} style={{width:"650px"}}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Bag ID</TableCell>
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
                            {row.barcode}
                        </TableCell>
                        <TableCell align="right">{row.weight}</TableCell>
                        <TableCell align="right">{row.purity}</TableCell>
                        <TableCell align="right">{row.maxPrice}</TableCell>
                        <TableCell align="right">{row.pricePaid}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SomeChart