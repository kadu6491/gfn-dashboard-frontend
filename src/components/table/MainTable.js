import React from 'react'


import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';


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

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

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
                            <StyledTableCell>Method</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.TableContent}
                    </TableBody>
                </Table>
            </TableContainer>

            {props.emptyRows < 0 && (
                <Typography align="center" style={{paddingTop: "30px"}}>
                    No Orders
                </Typography>
            )}
            <TablePagination
                rowsPerPageOptions={[10, 15, 25, 45]}
                component="div"
                count={props.rows.length}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                onChangePage={props.handleChangePage}
                onChangeRowsPerPage={props.handleChangeRowsPerPage}
            />
        </div>
    )
}

export default MainTable
