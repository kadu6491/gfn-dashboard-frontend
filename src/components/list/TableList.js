import React from 'react'
import {Button, Table, Avatar, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, TablePagination} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import ProductData from '../product/ProductData'

const useStyles = makeStyles((theme) => ({
    table: {
      maxWidth: "100%",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(4),
        backgroundSize: "contain",
      },
}));


const cellFontSize = "13px"

const TableList = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
        <div>
            <TableContainer component={Box}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize: cellFontSize}}>IMAGE</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">CATEGORY</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">NAME</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">QUANTITY</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">PRICE</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">STATUS</TableCell>
                            <TableCell style={{fontSize: cellFontSize}} align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ProductData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, id) => (
                            <TableRow key={row.id}>
                                <TableCell style={{fontSize: cellFontSize}} component="th" scope="row">
                                    <Avatar variant="rounded" src={`${row.image}`} className={classes.small} />
                                </TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">{row.category}</TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">{row.title}</TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">{12}</TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">${row.price}</TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">In Stock</TableCell>
                                <TableCell style={{fontSize: cellFontSize}} align="left">
                                    <Button >
                                        <EditIcon />
                                    </Button>
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={ProductData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

        </div>
    )
}

export default TableList
