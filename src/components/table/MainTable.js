import React from 'react'

import TableHeadList from './TableHeadList'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';

import BorderColorIcon from '@material-ui/icons/BorderColor';
import Completed from '../buttons/Completed';
import Pending from '../buttons/Pending';
import New from '../buttons/New';
import Shipped from '../buttons/Shipped';

const StyledTableCell = withStyles((theme) => ({
    head: {
    //   backgroundColor: "#1d3557",
      color: theme.palette.common.white,
      fontWeight: "600",
    },
    body: {
      fontSize: 14,
      color: "white"
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: "#eee",
            color: theme.palette.common.white
        },
        // '&:nth-of-type(even)': {
        //     backgroundColor: "#fff",
        // },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
      backgroundColor: "#0c2233",
      borderRadius: "10px",
      padding: "10px",
    },
});


const MainTable = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

    return (
        <div>
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell># ID</StyledTableCell>
                            <StyledTableCell>Customer</StyledTableCell>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Total</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell>{row.customer}</StyledTableCell>
                                <StyledTableCell>{row.date}</StyledTableCell>
                                <StyledTableCell>{row.total}</StyledTableCell>
                                <StyledTableCell>
                                    {row.status === "Completed" ? <Completed /> : null}
                                    {row.status === "Pending" ? <Pending /> : null}
                                    {row.status === "New" ? <New /> : null}
                                    {row.status === "Shipped" ? <Shipped /> : null}
                                </StyledTableCell>
                                
                                <StyledTableCell align="right">
                                    <Button>
                                        <BorderColorIcon style={{color: "white"}} />
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>     
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {emptyRows < 0 && (
                <Typography align="center" style={{paddingTop: "30px"}}>
                    No Orders
                </Typography>
            )}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default MainTable
