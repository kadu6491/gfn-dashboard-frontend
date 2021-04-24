import React from 'react'

// Import Material UI libraries
import {Typography, Grid, Card, CardContent, Box, Hidden, Divider} from '@material-ui/core'


// Import Material Icons
import {CreditCardRounded} from '@material-ui/icons'

// Import others
import useStyle from './style'
import RevenueGraph from '../graphs/RevenueGraph'
import OrderStatusGraph from '../graphs/OrderStatusGraph'

const MiddleDash = () => {
    const classes = useStyle();
    return (
        <Box mt={5}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={7}>
                    <Box boxShadow={2}>
                        <Card>
                            <CardContent className={classes.middleContent}>
                                <h5>Orders For The 30 days ({new Date().getFullYear()})</h5>
                                <Divider />
                                <div className={classes.graph}>
                                    <RevenueGraph />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} lg={5}>
                    <Box boxShadow={2}>
                        <Card>
                            <CardContent className={classes.middleContent}>
                                <h5>Order Status</h5>
                                <Divider />
                                <div className={classes.graph}>
                                    <OrderStatusGraph />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MiddleDash
