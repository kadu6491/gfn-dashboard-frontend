import React from 'react'

import { Drawer, Hidden, AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';

import { useTheme} from '@material-ui/core/styles';
import useStyles from './style'
import DrawerList from './Drawer';


const Nav = (props) => {
    const classes = useStyles()
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
