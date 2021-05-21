import React from 'react'

import { Drawer, Hidden, AppBar, IconButton, Toolbar, Typography, Badge} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useTheme} from '@material-ui/core/styles';
import useStyle from './styles'
import DrawerList from './Drawer';


const Nav = (props) => {
    const classes = useStyle()
    const { window } = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    
    return (
        <>
            <Hidden mdUp implementation="css">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {props.title}
                        </Typography>
                        <div className={classes.grow} />
                        <Hidden smUp implementation="css">
                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={props.badge} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Hidden>

            <nav className={classes.drawer} aria-label="dashboard">
                <Hidden  smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        <DrawerList num={props.num} name={props.name}/>
                    </Drawer>
                </Hidden>

                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <DrawerList num={props.num} name={props.name}/>
                    </Drawer>
                </Hidden>
            </nav>
        </>
    )
}

export default Nav
