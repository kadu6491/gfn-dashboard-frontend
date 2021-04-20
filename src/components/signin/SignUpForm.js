import React from 'react'

import {Container, Typography, Grid, Link, TextField, CssBaseline, Button, Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './style'
import './login.css'

const SignUpForm = () => {
    const classes = useStyles()
    return (
        <div className="loginMain">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="First Name"
                            name="fn"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Last Name"
                            name="ln"
                            autoComplete="email"
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
