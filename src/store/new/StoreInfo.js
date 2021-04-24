import React from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert';

import api from '../../api'
import StoreModal from '../modal/StoreModal';

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        backgroundColor: "#eeeeee",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        // marginTop: theme.spacing(20)
    },
    root: {
        width: "50%",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
        marginTop: theme.spacing(15)
    },

    form: {
        width: "100%",
        margin: theme.spacing(2)
    },
    btn: {
        backgroundColor: "#3a4750",
        color: "white",
        '&:hover': {
            backgroundColor: "#000",
        }
    },
}))

export const StoreInfo = () => {
    const classes = useStyles()
    const [storeName, setStoreName] = React.useState("")
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [systemError, setSystemError] = React.useState(false)

    const timer = React.useRef();

    let token = localStorage.getItem("token")
    let id = localStorage.getItem("sessid")
    let history = useHistory()

    if (token === null || token === undefined)
    {
        history.push("/")
    }

    const handleOnChange = (event) => {
        setStoreName(event.target.value)
    }

    const handleError = () => {
        if(error)
        {
            return <Alert 
                        variant="filled" 
                        severity="error"
                        style={{height: "40px"}}
                    >
                    Error - Provide Store name
                </Alert>
        }
        else if(systemError)
        {
            return <Alert 
                        variant="filled" 
                        severity="error"
                        style={{height: "40px"}}
                    >
                    Error - Please contact system administrator
                </Alert>
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(storeName)

        if(storeName === "" || storeName === undefined)
        {
            setError(!error)
        }

        else {
            api.post("/new/", {
                "name":storeName,
                "id": id,
            }).then(resp => {
                // console.log(resp.data)
                // history.push("/dashboard")
                if(resp.data === "success")
                {
                    setError(false)
                    if (!loading) {
                        setSuccess(false);
                        setLoading(true);
                        setOpen(!open);
                        timer.current = window.setTimeout(() => {
                            setSuccess(true);
                            setLoading(false);
                        }, 2000);
                    }
                }
                else if (resp.data === "error") {
                    setSystemError(!systemError)
                }
            })
        }   
    }

    // const handleButtonClick = () => {
    //     if (!loading) {
    //         setSuccess(false);
    //         setLoading(true);
    //         setOpen(!open);
    //         timer.current = window.setTimeout(() => {
    //             setSuccess(true);
    //             setLoading(false);
    //           }, 2000);
    //         }
    // };

    return (
        <div className={classes.mainRoot}>
            <Grid 
                container 
                justify="center" 
                className={classes.root}
                // style={{backgroundColor: "red"}}
            >
                <form className={classes.form} onSubmit={handleSubmit}>
                    {handleError()} <br /> <br />
                    <Typography align="center">
                        <b>Enter The New Store Name</b>
                    </Typography> <br />
                    <TextField 
                        id="outlined-basic" 
                        label="Store Name" 
                        variant="outlined" 
                        fullWidth
                        onChange={handleOnChange} 
                    />
                    <br /> <br />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        className={classes.btn}
                        style={{marginRight: "15px"}}
                    > 
                        Create
                    </Button>
                        
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="secondary"
                    > 
                        Cancel
                    </Button>
                </form>
                <StoreModal 
                    open={open}
                    success={success}
                    loading={loading}
                />
            </Grid>

        </div>
    )
}
