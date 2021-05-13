import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f0ad4e",
        boxShadow: `0 0 2px #fff, 0px 0px 5px #f0ad4e`,
        borderRadius: "10px",
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },


}));


const Shipped = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.root} p={0.6}>
                <Typography align="center" variant="subtitle2" style={{fontSize: "13px"}}>
                    Shipped
                </Typography>
            </Box>
        </div>
    )
}

export default Shipped
