import React from 'react'

import {
    Divider, List, ListItemIcon, ListItemText, Typography, 
    Button, Box, Grid, Collapse,
} from '@material-ui/core'

import MuiListItem from "@material-ui/core/ListItem";

import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import ViewStreamIcon from '@material-ui/icons/ViewStream';

import { withStyles } from '@material-ui/core/styles';

import {useHistory} from 'react-router-dom'

import useStyle from './styles'
import { ChevronRightOutlined, ExpandMoreOutlined } from '@material-ui/icons';

const ListItem = withStyles({
    root: {
      "&$selected": {
            backgroundColor: "#065471",
            color: "white",
            opacity: "1",
            "&:hover": {
                opacity: "0.8",
                backgroundColor: "#065471",
            },
        },

    },
    selected: {}
  })(MuiListItem);

const DrawerList = (props) => {
    const classes = useStyle()
    const [selectedIndex, setSelectedIndex] = React.useState(props.num);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let history = useHistory()
    
    const logout = () => {
        localStorage.clear()
        history.push("/")
    }

    return (
            <div className={classes.navTool}>
                <List>
                    <ListItem>
                        <Box width="100%" >
                            <Grid container direction="column" alignItems="center">
                                <div 
                                    style={{
                                        backgroundColor: "#065471",
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                        <PersonPinIcon style={{fontSize: "50px"}} />
                                    </div>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{fontWeight: "900", paddingTop: "5px"}}>
                                        {props.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </ListItem>
                    <ListItem >
                        <Button 
                            fullWidth 
                            variant="contained"
                            style={{backgroundColor:"#0a91ab", color: "white"}}
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem
                        button 
                        className={classes.listNav}
                        selected={selectedIndex === 0}
                        component="a"
                        href="/dashboard"
                    >
                        <ListItemIcon>
                            <DashboardRoundedIcon style={{color: "white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>

                    <ListItem 
                        button 
                        className={classes.listNav} 
                        selected={selectedIndex === 1}
                        component="a"
                        href="/analysis"
                    >
                        <ListItemIcon>
                            <AssessmentRoundedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Analysis"} />
                    </ListItem>

                    <ListItem 
                        button 
                        className={classes.listNav} 
                        selected={selectedIndex === 2}
                        component="a"
                        href="/products"
                    >
                        <ListItemIcon>
                            <LocalMallRoundedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Products"} />
                    </ListItem>              
                    <ListItem 
                        button 
                        className={classes.listNav} 
                        selected={selectedIndex === 3}
                        component="a"
                        onClick={handleClick}
                        // href="/orders"
                    >
                        <ListItemIcon>
                            <CreditCardIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Orders"} />
                        {open ? <ExpandMoreOutlined /> : <ChevronRightOutlined />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <List disablePadding >
                            <ListItem button component="a" className={classes.nestedxs} href="/orders">
                                <ListItemIcon>
                                    <ViewStreamIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="All Orders" />
                            </ListItem>
                            <ListItem button component="a" className={classes.nestedxs}>
                                <ListItemIcon>
                                    <CheckCircleIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Completed" />
                            </ListItem>
                            <ListItem button component="a" className={classes.nestedxs}>
                                <ListItemIcon>
                                    <CancelIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Canceled" />
                            </ListItem>
                            <ListItem button component="a" className={classes.nestedxs}>
                                <ListItemIcon>
                                    <AssignmentReturnedIcon style={{color: "white"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Returns" />
                            </ListItem>
                        </List>
                    </Collapse>  
                    <ListItem button className={classes.listNav} selected={selectedIndex === 4}>
                        <ListItemIcon>
                            <LocalOfferIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Sales"} />
                    </ListItem>

                    <ListItem button className={classes.listNav} selected={selectedIndex === 5}>
                        <ListItemIcon>
                            <LocalShippingIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Shippments"} />
                    </ListItem>
                    <br /> <br />
                    <Divider />

                    <ListItem button className={classes.listNav} selected={selectedIndex === 6}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Account"} />
                    </ListItem>

                    <ListItem button className={classes.listNav} selected={selectedIndex === 7}>
                        <ListItemIcon>
                            <SettingsApplicationsRoundedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItem>

                    <ListItem button className={classes.listNav} selected={selectedIndex === 8}>
                        <ListItemIcon>
                            <HelpRoundedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"Help"} />
                    </ListItem>
                    
                    <br /> <r /> <br />
                    <ListItem button className={classes.listNav} selected={selectedIndex === 8}>
                        <ListItemIcon>
                            <StoreMallDirectoryOutlinedIcon style={{color: "white"}} />
                        </ListItemIcon>
                        <ListItemText primary={"My Store"} />
                    </ListItem>

                </List>
            </div>
    )
}

export default DrawerList
