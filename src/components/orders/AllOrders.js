import React from 'react'

import RowData from './RowData';
import MainTable from '../table/MainTable';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, TableCell, TableRow } from '@material-ui/core';

import BorderColorIcon from '@material-ui/icons/BorderColor';

import Completed from '../buttons/Completed';
import Pending from '../buttons/Pending';
import New from '../buttons/New';
import Shipped from '../buttons/Shipped';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "red",
        width: "100%",
        [theme.breakpoints.down("xs")]:
        {
            width: "92vw",
        },
    }

}));

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

const MainContent = ({page, rowsPerPage}) => {
    return (
        RowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                    {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.customer}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.total}</StyledTableCell>
                <StyledTableCell>{row.method}</StyledTableCell>
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
        ))
    )
}

const AllOrders = () => {
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, RowData.length - page * rowsPerPage);


    return (
        <div className={classes.root}>
            <MainTable 
                rows={RowData}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                TableContent={<MainContent page={page} rowsPerPage={rowsPerPage} />}
                emptyRows={emptyRows}
            />
        </div>
    )
}

export default AllOrders
