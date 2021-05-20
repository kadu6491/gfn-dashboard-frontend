import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, TableCell, TableRow } from '@material-ui/core';

import MainTable from '../table/MainTable';
import RowData from './RowData';

import New from '../buttons/New';


import DisplayCell from '../table/DisplayCell';
import RowContent from '../table/RowContent';

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



const NewOrders = () => {
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
                TableContent={
                    <RowContent 
                        RowData={RowData}
                        orderStatus="New"
                        page={page}
                        rowsPerPage={rowsPerPage}
                        status={<New />}
                    />
                }
                emptyRows={emptyRows}
            />
        </div>
    )
}

export default NewOrders
