import {makeStyles} from '@material-ui/core/styles'

const btnSize = "25px";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white",
        marginTop: "-15px",
        padding: "8px",
    },
    initialBtn: {
        backgroundColor: "#0c2233",
        // maxWidth: btnSize,
        // maxHeight: btnSize,
        // minWidth: btnSize,
        // minHeight: btnSize,
        // borderRadius: "50%",
        width: theme.spacing(4),
        height: theme.spacing(4),
        fontSize: "10px",
        color: "white",
        fontWeight: "800",
        // marginRight: theme.spacing(3),
        "&:hover": {
            backgroundColor: "black",
        }
    },
    alertBtn: {
        maxWidth: btnSize,
        maxHeight: btnSize,
        minWidth: btnSize,
        minHeight: btnSize,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: "1px solid #eee",
        // backgroundColor: fade(theme.palette.common.black, 0.20),
        // '&:hover': {
        //   backgroundColor: "#eee",
        // },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "black",
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '24ch',
          "&:focus": {
                width: '29ch',
          }
        },
    },
    grow: {
        flexGrow: 1,
    },
    avator: {
        backgroundColor: ""
    }
}))

export default useStyles