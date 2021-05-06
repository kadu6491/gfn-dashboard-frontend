import React from 'react'
import { Backdrop, CircularProgress, Button, Fab, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      display: "flex",
      flexDirection: "column",
    },
    root: {
        display: 'flex',
        alignItems: 'center',
      },
      wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
      },
      buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
      },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}));

const StoreModal = (props) => {
    const classes = useStyles();
    const timer = React.useRef();
    
    const buttonClassname = clsx({
        [classes.buttonSuccess]: props.success,
      });
    
      React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    
    //   const handleButtonClick = () => {
    //     if (!loading) {
    //       setSuccess(false);
    //       setLoading(true);
    //       setOpen(!open);
    //       timer.current = window.setTimeout(() => {
    //         setSuccess(true);
    //         setLoading(false);
    //       }, 2000);
    //     }
    //   };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={props.open}>
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <Fab
                            aria-label="save"
                            color="primary"
                            className={buttonClassname}
                        >
                            {props.success ? <CheckIcon /> : <SaveIcon />}
                        </Fab>
                        {props.loading && <CircularProgress size={68} className={classes.fabProgress} />}
                    </div>
                    <div className={classes.wrapper}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={buttonClassname}
                            disabled={props.loading}
                        >
                           {props.loading ? "Saving...." : "Saved"}
                        </Button>
                        {/* {loading && <CircularProgress size={24} className={classes.buttonProgress} />} */}
                    </div>
                </div>

                <div>
                    <br /> <br />

                    {props.loading ? null :
                        props.action
                        
                    }
                </div>
            </Backdrop>
           
        </div>
    )
}

export default StoreModal
