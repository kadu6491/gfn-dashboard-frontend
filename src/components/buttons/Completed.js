import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#5cb85c",
        boxShadow: `0 0 1px #fff, 0px 0px 8px #5cb85c`,
        borderRadius: "10px",
        width: "64%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },


}));

const Completed = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.root} p={0.6}>
                <Typography align="center" variant="subtitle2" style={{fontSize: "13px"}}>
                    Completed
                </Typography>
            </Box>
        </div>
    )
}

export default Completed
