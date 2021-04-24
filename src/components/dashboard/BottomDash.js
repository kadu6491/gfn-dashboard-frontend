import React from 'react'

// Import Material UI libraries
import {Typography, Grid, Card, CardContent, Box, Hidden, Button} from '@material-ui/core'


// Import Material Icons
import {CreditCardRounded} from '@material-ui/icons'

// Import others
import useStyle from './style'

const BottomDash = () => {
    const classes = useStyle();
    return (
        <Box mt={5}>
            <Grid container spacing={2} style={{backgroundColor: "red"}}>
                <Grid item xs={12} sm={7} md={7} lg={7}>
                    <Card>
                        <h5>Card 1</h5>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Card>
                        <h5>Card 1</h5>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BottomDash
