import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#d9534f",
        boxShadow: `0 0 5px #d9534f, 0px 0px 15px #d9534f`,
        borderRadius: "10px",
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },


}));


const Pending = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.root} p={0.6}>
                <Typography align="center" variant="subtitle2" style={{fontSize: "13px"}}>
                    Pending
                </Typography>
            </Box>
        </div>
    )
}

export default Pending
