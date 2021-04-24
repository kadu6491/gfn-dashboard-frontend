import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    root: {
        // backgroundColor: "pink",
        display: "flex"
    },
    title: {
        paddingTop: theme.spacing(3),
        fontFamily: 'sans-serif',
        fontWeight: "700",
        fontSize: "14px",
        letterSpacing: "1.5px",
    },
    date: {
        backgroundColor: "white",
        fontSize: "12px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "9px",
        },
        "&:hover": {
            backgroundColor: "#065471",
            color: "white",
        }
        // borderShadow: "10px",
    },
    card: {
        color: "white",
        // padding: theme.spacing(2),
    },
    contentTitle: {
        // backgroundColor: "red",
        color: "white",
        fontSize: "11px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92px",
        fontWeight: "800",

    },
    typo: {
        lineHeight: "1.2",
    },
    typoText: {
        fontSize: "10px",
    },

    typoNum: {
        fontSize: "16px",
        fontWeight: "900",
        fontFamily: "'Anton', sans-serif",
        letterSpacing: "2px"
    },
    content: {
        flex: '1 0 auto',
        // backgroundColor: "pink",
        fontSize: "10px",
        boxShadow: "10px",
    },
    middleContent: {
        flex: '1 0 auto',
        paddingTop: "-100px",
        // backgroundColor: "pink",
        border: "2px solid #fff",
    },
    graph: {
        // backgroundColor: "red",
    }
}))

export default useStyle