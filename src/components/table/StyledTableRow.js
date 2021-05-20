import { TableRow } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';

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

export default StyledTableRow