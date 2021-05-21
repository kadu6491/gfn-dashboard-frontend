import {makeStyles} from '@material-ui/core/styles'

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#eee",
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        // backgroundColor: "#0c2233",
      },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#0c2233',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            marginTop: "-5px",
        },
    },
    navTool: {
        // position: "absolute",
        // height: "auto",
        // width: "100%",
        // backgroundColor: '#0c2233',
        color: "white",
    },
    listNav: {
        "&:hover": {
            backgroundColor: "#065471",
            opacity: "0.7",
        },
    },
    active: {
        backgroundColor: "red",
    },
    grow: {
        flexGrow: 1,
      },
}));

export default useStyle