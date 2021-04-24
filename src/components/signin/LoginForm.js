import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
import {Container, Typography, Grid, Link, TextField, CssBaseline, Button, Avatar} from '@material-ui/core'

import api from '../../api'

import useStyles from './style'
import './login.css'

const LoginForm = () => {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    
    let history = useHistory()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleError = () => {
        if(error)
        {
            return <Alert variant="filled" severity="error">
                Incorrect email or password. Try again
            </Alert>
        }
        
        return null
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        api.post('/signin/', {
            "email": email,
            "password": password, 
        }).then(resp => {
            if(resp.data.msg === "success")
            {
                localStorage.setItem("token", resp.data.token)
                localStorage.setItem("sessid", resp.data.sessid)
                history.push("/dashboard")
            }
            else {
                setError(true)
            }
        })
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
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleEmailChange}
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
                            onChange={handlePasswordChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs style={{marginBottom: "10px"}}>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" color="textPrimary">
                                    <Typography>
                                        Don't have an account? Sign Up
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

export default LoginForm
