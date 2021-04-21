import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Container, Typography, Grid, Link, TextField, CssBaseline, Button, Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

import useStyles from './style'
import './login.css'

import api from '../../api'

const SignUpForm = () => {
    const classes = useStyles()
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeat, setRepeat] = useState("")
    const [error, setError] = useState(false)
    const [isExit, setIsExit] = useState(false)

    let history = useHistory()

    const handleOnFnChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleOnLnChange = (event) => {
        setLastName(event.target.value)
    }
    const handleOnEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleOnPassChange = (event) => {
        setPassword(event.target.value)
    }
    const handleOnRepeatChange = (event) => {
        setRepeat(event.target.value)
    }

    const handleError = () => {
        if(error)
        {
            return <Alert variant="filled" severity="error">Password do not much</Alert>
        }
        else if(isExit)
        {
            return <Alert variant="filled" severity="error">Email already exits</Alert>
        }
        return null
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(password !== repeat)
        {
            setError(true)
        }
        else{
            api.post("/account", {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password,
            }).then(resp => {
                // console.log(resp.data)
                if(resp.data === "isExit")
                {
                    setError(false)
                    setIsExit(true)
                }
                else if(resp.data === "success"){
                    history.push("/")
                }
                else {
                    setIsExit(false)
                    console.log("There is an error")
                }
            })
        }
    }

    return (
        <div className="loginMain">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    {handleError()}
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="First Name"
                            name="fn"
                            autoFocus
                            onChange={handleOnFnChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Last Name"
                            name="ln"
                            onChange={handleOnLnChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleOnEmailChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleOnPassChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Retype Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleOnRepeatChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/" color="textPrimary">
                                    <Typography>
                                        Already a member? Sign In
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    
                </div>
      
            </Container>
        </div>
    )
}

export default SignUpForm
