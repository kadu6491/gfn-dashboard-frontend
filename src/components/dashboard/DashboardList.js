import React, {useEffect} from 'react'

// Import Material UI libraries
import {Typography, Grid, Button, Paper} from '@material-ui/core'


// Import Material Icons
import {CalendarTodayOutlined} from '@material-ui/icons'


// Import Graph components

// Import others
import useStyle from './style'
import api from '../../api'
import TopDash from './TopDash'
import MiddleDash from './MiddleDash'
import BottomDash from './BottomDash'


const DashboardList = (props) => {
    const classes = useStyle()
    const [date, setDate] = React.useState("")

    useEffect(() => {
        api.get('/today/').then(resp => {
            setDate(resp.data)
        })
    }, [])
    return (
        <div>
            <div className={classes.root}>
                <Typography component="h6" className={classes.title}>
                    Dashboard
                </Typography>

                <Grid 
                    container 
                    justify="flex-end" 
                    direction="row" 
                    alignItems="flex-end"
                    // style={{backgroundColor: "yellow"}}
                >
                    <Grid item> 
                        <Button 
                            // startIcon={<CalendarTodayOutlined fontSize="inherit" />}
                            variant="contained" 
                            className={classes.date}>
                            {date}
                        </Button>
                    </Grid>
                </Grid>
            </div>

            <TopDash 
                order={"00000"}
                sales={"$00000"}
                returns={"00000"}
                customers={"00000"}
            />

            <MiddleDash />

            {/* <BottomDash /> */}
        </div>
    )
}

export default DashboardList
