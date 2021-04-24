import React from 'react'

// Import Material UI libraries
import {Typography, Grid, Card, CardContent, Box, Hidden, Button} from '@material-ui/core'


// Import Material Icons
import {CreditCardRounded} from '@material-ui/icons'

// Import others
import useStyle from './style'

const TopDash = (props) => {
    const classes = useStyle();

    return (
        <Box mt={4}>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={3}>
                    <Card className={classes.card} style={{backgroundColor: "#6610f2"}}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.typo}>
                                <b className={classes.typoText}>TOTAL ORDERS</b><br />
                                <b className={classes.typoNum}>{props.order}</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Card className={classes.card} style={{backgroundColor: "#198754"}}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.typo}>
                                <b className={classes.typoText}>TOTAL SALES</b><br />
                                <b className={classes.typoNum}>{props.sales}</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Card className={classes.card} style={{backgroundColor: "#00adb5"}}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.typo}>
                                <b className={classes.typoText}>TOTAL RETURN</b><br />
                                <b className={classes.typoNum}>{props.returns}</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Card className={classes.card} style={{backgroundColor: "#ffc045"}}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.typo}>
                                <b className={classes.typoText}>CUSTOMERS</b><br />
                                <b className={classes.typoNum}>{props.customers}</b>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopDash
