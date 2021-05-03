import {makeStyles,} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
   root: {
        flexGrow: 1,
        borderRadius: "8px",
        marginTop: theme.spacing(2),
        padding: "8px",
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(0.1),
        }
   },
   container: {
       // borderRadius: "8px",
       // paddingLeft: theme.spacing(3),
       // paddingTop: "10px",
        width: "100%",
        
   },
   tabs: {
       fontSize: "11px",
       [theme.breakpoints.down("xs")]: {
            fontSize: "10px",
            padding: "18px",
        },
        // backgroundColor: "pink",
   },
   value1: {
       margin: "-20px"
   },
   tabList: {
       '&:hover': {
           color: "#0c2233",
       },
    //    backgroundColor: "yellow",
   },
   viewBtn: {
       minWidth: "35px",
       maxWidth: "35px",
    //    backgroundColor: "yellow"
   },
   viewTabs: {
       backgroundColor: "orange",
       display: "flex",
       justifyContent: "center",
       width: 200,
   },
   vTab: {
        // backgroundColor: "brown",
        width: 100,
   },
   tabCon: {
    //    backgroundColor: "red",
       display: "flex",
       marginTop: "10px",
   },

   btnAdd: {
       backgroundColor: "#1d3557",
       color: "white",
       '&:hover': {
           backgroundColor: "#457b9d"
       }
   }
    
}))

export default useStyle