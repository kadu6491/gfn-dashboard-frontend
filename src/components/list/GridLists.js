import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import ProductData from '../product/ProductData'
import { Box, Button, Grid, Typography } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';

import "./style.css";


const useStyles = makeStyles((theme) => ({
    root: {
    //   '& > *': {
    //     marginTop: theme.spacing(2),
    //   },
      display: "flex",
      flexDirection: "column"
    },
    gridContainer: {
        // backgroundColor: "red",
    },
    gridItem: {
        // backgroundColor: "red",
        border: "3px solid #dee2e6",
        // marginBottom: "10px",
    },
    boxItem: {
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            width: "150px"
        }
    },
    img: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
        height: "260px",
        '& > img': {
            width: "60%",
            height: "100%", 
        },
        [theme.breakpoints.down('xs')]: {
            height: "155px"
        },
        [theme.breakpoints.down('md')]: {
            maxHeight: "200px"
        }
        
        
    },
    typoo1: {
        fontSize: "16px",
        paddingTop: "10px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "11px",
            paddingLeft: "1px",
        }
    },
    typoo2: {
        fontSize: "12px",
        fontWeight: "700",
        paddingTop: "20px",
        fontFamily: 'Verdana, sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: "9px",
            paddingLeft: "1px",
            paddingTop: "17px",
        }
    },
    action: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        // backgroundColor: "red",
        [theme.breakpoints.down('xs')]: {
            width: "98%"
        }
    },
    edit: {
        [theme.breakpoints.down("xs")]: {
            minWidth: "24px",
            maxWidth: "24px",
            minHeight: "25px",
            maxHeight: "25px",
            marginTop: "10px",
        }
    },
    icon: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "16px",
            marginRight: '10px',
        }
    }
}));

const GridLists = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(12);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <Grid container className={classes.gridContainer} spacing={1}>
                
            {ProductData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, id) => (
                <Grid key={id} xs={6} sm={4} lg={3} item className={classes.gridItem}>
                    <Box className={classes.boxItem}>
                        <Box className={classes.img}>
                            <img src={`${row.image}`} />
                        </Box>

                        <Typography align="left" variant="subtitle1" className={classes.typoo2}>
                            {row.title}
                        </Typography>

                        <div className={classes.action}>
                            <Typography variant="subtitle2" className={classes.typoo1}>
                                ${row.price}
                            </Typography>
                            <Button color="secondary" className={classes.edit}>
                                <EditIcon className={classes.icon} />
                            </Button>
                        </div>
                    </Box>
                </Grid>
            ))}
                
            </Grid>
            {/* {ProductData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, id) => (
                <li key={id}>{row.title}</li>
            ))} */}
            
            <Box>
                <TablePagination
                    rowsPerPageOptions={[12, 25, 100]}
                    component="div"
                    count={ProductData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    labelRowsPerPage="Item per page"
                />
            </Box>
        </div>
    )
}

export default GridLists
