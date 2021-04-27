import {makeStyles,} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    root: {
        color: "white",
    },
    newAdds: {
        backgroundColor: "white",
        width: "33%",
        // margin: theme.spacing(4)
    },
    newBtn: {
        // backgroundColor: "#065471",
        color: 'black',
        '&:hover': {
            backgroundColor: "white",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "10px",
            backgroundColor: "#065471",
            color: "white",
            '&:hover': {
                backgroundColor: "#0a91ab",
            },
        },
    },
    typo: {
        lineHeight: "17px",
    },
    typo1: {
        fontSize: "15px",
        fontWeight: "800",
        letterSpacing: "2px",
    },
    typo2: {
        fontSize: "10px",
    },
    icon: {
        fontSize: "30px",
        marginRight: "10px"
    },
    catTypo: {
        fontSize: "25px",
        paddingTop: "20px",
        paddingBottom: "20px",
        fontWeight: "600",
        letterSpacing: "1.3px",
        [theme.breakpoints.down('xs')]:
        {
            fontSize: "20px"
        }
    },
    catRoot: {
        
    },
    catCard: {
        maxWidth: 280,
    },

    bestCard: {
        maxWidth: 270,
        height: "auto",
    },
    typoName: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "9px",
        },
        fontFamily: 'Verdana, sans-serif',
        fontSize: "12px",
        // backgroundColor: "red",
        height: "40px",
    }
    
}))

export default useStyle