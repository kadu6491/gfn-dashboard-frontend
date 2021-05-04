import React from 'react'

import { InputBase, TextField, FormHelperText, Box, Button, Divider, Typography, Grid, NativeSelect, InputLabel, Hidden } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import ImageUploader from 'react-images-upload';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        borderRadius: "10px",
        // height: "800px",
    },
    title: {
        fontWeight: "600",
    },
    boxForm: {
        // backgroundColor: "red"
    },
    boxItem: {
        // backgroundColor: "pink",
        marginTop: "10px",
    },
    boxInput: {
        width: "100%"
    },
    textArea: {
        width: "100%",
    },
    uploadBtn: {
        backgroundColor: "white",
        minWidth: "100%",
        maxWidth: "100%",
        border: "1px solid #ced4da",
        borderRadius: "18px",
    },
    actionBtn: {
    }, 
    cancel: {
        marginRight: "10px",
        maxWidth: "70px",
        minWidth: "70px",
        fontSize: "12px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "8px"
        }
    },
    save: {
        marginRight: "10px",
        maxWidth: "110px",
        minWidth: "110px",
        fontSize: "12px",
        backgroundColor: "#1d3557",
        color: "white",
        '&:hover': {
            color: "white",
            backgroundColor: "#457b9d",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "8px",
            maxWidth: "80px",
            minWidth: "80px",
        }
    }

}))

const InputField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: "18px",
            //   height: "50px",
            //   marginTop: "5px"
            },
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
        '& label.Mui-focused': {
            color: '#1d3557',
            marginTop: "1px"
        },
        
    }
})(TextField)

const StrapInput = withStyles((theme) => ({ 
    input: {
        border: "1px solid #ced4da",
        borderRadius: "18px",
        padding: '17px 26px 16px 13px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: "18px",
            border: "1px solid #ced4da",
        },
    }
}))(InputBase)

const NewItem = (props) => {
    const classes = useStyles()
    const [pictures, setPictures] = React.useState([]);
    
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(pictures)
    }

    return (
        <div>
            <Box className={classes.root} mt={2}>
                <Box p={2} display="flex" justifyContent="space-between">
                    <Hidden xsDown implementation="js">
                        <Typography className={classes.title}>
                            New Product
                        </Typography>
                    </Hidden>
                    <div className={classes.actionBtn}>
                        <Button href="/products/" variant="outlined" color="secondary" className={classes.cancel}>
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            className={classes.save}
                            onClick={onSubmit}
                        >
                            Save Item
                        </Button>
                    </div>
                </Box>
                <Divider />

                <Box className={classes.boxForm} m={2}>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} className={classes.boxItem}>
                                <InputField 
                                    // size="small" 
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined" 
                                    className={classes.boxInput}
                                />
                                <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                    Enter the name of the item.
                                </FormHelperText>
                            </Grid>

                            <Grid item xs={12} sm={6} className={classes.boxItem}>
                                <InputField 
                                    // size="small" 
                                    id="outlined-basic" 
                                    label="Price" 
                                    variant="outlined" 
                                    className={classes.boxInput}
                                />
                                <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                    Enter the price of the iteam.
                                </FormHelperText>
                            </Grid>

                            <Grid item xs={12} sm={6} className={classes.boxItem}>
                                <InputField 
                                    // size="small" 
                                    id="outlined-basic" 
                                    label="Quantity" 
                                    variant="outlined" 
                                    className={classes.boxInput}
                                />
                                <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                    Enter the item quantity.
                                </FormHelperText>
                            </Grid>
                            
                            <Grid item xs={12} sm={6} className={classes.boxItem}>
                                <NativeSelect 
                                    variant="outlined" 
                                    id="demo-customized-select-native"
                                    input={<StrapInput />}
                                    className={classes.boxInput}
                                >
                                    <option value="">Select category</option>
                                    <option value="10">Ten</option>
                                    <option value="20">Twenty</option>
                                </NativeSelect>
                                <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                    Select the category.
                                </FormHelperText>
                            </Grid>


                        </Grid>

                        <Box mt={6}>
                            <InputField
                                id="outlined-textarea"
                                label="Description"
                                placeholder="Enter Item Description"
                                multiline
                                rows={9}
                                variant="outlined"
                                className={classes.textArea}
                            />
                            <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                   Provide the item description
                            </FormHelperText>
                        </Box>

                        <Box mt={3} pb={6}>
                            <div className={classes.uploadBtn}>
                                <ImageUploader
                                    {...props}
                                    withIcon={true}
                                    onChange={onDrop}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                    maxFileSize={5242880}
                                    withPreview={true}
                                />
                            </div>
                            <FormHelperText id="my-helper-text" style={{paddingLeft: "8px"}}>
                                Provide images for the item
                            </FormHelperText>                            
                        </Box>
                    </form>
                </Box>
            </Box>
            {/* <FormControl>
                <InputField 
                    size="small" 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    className={classes.root}
                />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl> */}
        </div>
    )
}

export default NewItem
