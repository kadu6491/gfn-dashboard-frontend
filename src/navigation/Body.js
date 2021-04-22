import React, {useEffect} from 'react'

import { CssBaseline, Hidden} from '@material-ui/core'

import api from '../api'

import useStyles from './style'
import Header from './Header';
import Nav from './Nav';


const DrawerNav = (props) => {
    const classes = useStyles()
    let token = localStorage.getItem("token")

    const [firstname, setFirstName] = React.useState("")
    const [lastname, setLastName] = React.useState("")

    useEffect(() => {
        api.get('/info/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            console.log(resp.data)
            setFirstName(resp.data.fn)
            setLastName(resp.data.ln)
        })
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <Nav num={props.num} title={props.title} name={firstname + " " + lastname} />

            <main className={classes.content}>
                <Hidden mdUp implementation="css">
                    <div className={classes.toolbar} />
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Header />
                </Hidden>
                
                {props.main}
                
            </main>
        </div>
    )
}

export default DrawerNav
