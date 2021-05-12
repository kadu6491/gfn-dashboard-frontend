import React from 'react'

import useStyles from './style'
import {Button, Grid, Box, Badge, InputBase, Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';


const Header = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={classes.header}
            >
                <Box>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Box>
                <div className={classes.grow} />
                <Box mr={2}>
                    <Button 
                        variant="outlined"
                        className={classes.alertBtn}>
                        <NotificationsNoneRoundedIcon fontSize="small" />
                    </Button>
                </Box>

                <Box mr={2}>
                    <Button 
                        variant="outlined"
                        className={classes.alertBtn}
                    >
                        <Badge badgeContent={props.badge} color="secondary">
                            <MailOutlineRoundedIcon fontSize="small" />
                        </Badge>
                    </Button>
                </Box>
                
                <Box>
                    {/* <Avatar className={classes.initialBtn}>{props.initial}</Avatar> */}
                    <IconButton>
                        <Avatar className={classes.initialBtn}>{props.initial}</Avatar>
                    </IconButton>
                </Box>
            </Grid>
        </div>
    )
}

export default Header
