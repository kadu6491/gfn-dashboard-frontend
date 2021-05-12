import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

import RowData from './RowData';
import MainTable from '../table/MainTable';

import { makeStyles } from '@material-ui/core/styles';

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
const AllOrders = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MainTable 
                rows={RowData}
            />
        </div>
    )
}

export default AllOrders
