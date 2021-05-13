import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#0275d8",
        boxShadow: `0 0 10px #0275d8, 0px 0px 5px #0275d8`,
        borderRadius: "10px",
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        }
    },


}));


const New = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.root} p={0.6}>
                <Typography align="center" variant="subtitle2" style={{fontSize: "13px"}}>
                    New
                </Typography>
            </Box>
        </div>
    )
}

export default New
