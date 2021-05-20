import { TableCell } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';

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

export default StyledTableCell