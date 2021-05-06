import React, {useState, useEffect} from 'react'

import { InputBase, TextField, FormHelperText, Box, Button, Divider, Typography, Grid, NativeSelect, InputLabel, Hidden } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import ImageUploader from 'react-images-upload';

import api from '../../api'
import StoreModal from '../../store/modal/StoreModal';

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
            maxWidth: "110px",
            minWidth: "110px",
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
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [pictures, setPictures] = useState([]);

    const [cat, setCat] = useState([])
    const [errors, setErrors] = useState(false)
    const [pe, setPE] = useState(false)
    const [qe, setQE] = useState(false)
    const [ce, setCE] = useState(false)
    const [de, setDE] = useState(false)

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [systemError, setSystemError] = React.useState(false)

    const timer = React.useRef();

    let id = localStorage.getItem("sessid");
    
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };

    const handleError = () => {
        if(name == ""){
            setErrors(!errors)
        }
        if(price == undefined)
        {
            setPE(!pe)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if(name === "")
        {
            setErrors(true)
            console.log("there is an error")
        }
        if(price === undefined)
        {
            setPE(true)
        }
        if(quantity === undefined)
        {
            setQE(true)
        }
        if(category === "")
        {
            setCE(true)
        }
        if(description === "")
        {
            setDE(true)
        }
        else {
            console.log(id)
            console.log(name)
            console.log(price)
            console.log(quantity)
            console.log(category)
            console.log(description)

            if (!loading) {
                setSuccess(false);
                setLoading(true);
                setOpen(!open);
                timer.current = window.setTimeout(() => {
                    setSuccess(true);
                    setLoading(false);
                }, 2000);
            }
        }

        let pic = []
        
        pictures.map((item, key) => {
            console.log(item)
            // item.map((nam, id) => {
            //     console.log(nam.name)
            //     pic.push(nam.name)
            // })
        })

        // api.post('/product/new/', {
        //     id,
        //     name,
        //     price,
        //     quantity,
        //     category,
        //     description,
        //     // "pictures": pic,
        // }).then(resp => {
        //     console.log(resp)
        // })
    };

    useEffect(() => {
        api.get("/category/").then(resp => {
            console.log(resp.data)
            setCat(resp.data)
        })
    }, [])

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
                                    value={name}
                                    onChange={onChangeName}
                                    error={errors}
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
                                    value={price}
                                    onChange={onChangePrice}
                                    error={pe} 
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
                                    value={quantity}
                                    onChange={onChangeQuantity}
                                    error={qe} 
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
                                    input={<StrapInput error={ce}/>}
                                    className={classes.boxInput}
                                    value={category}
                                    error={ce}
                                    onChange={onChangeCategory}
                                >
                                    <option value="">Select category</option>
                                    {cat.map((item, id) => (
                                        <option value={item._id.$oid} key={id}>{item.name}</option>
                                    ))}
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
                                value={description}
                                onChange={onChangeDescription}
                                error={de}
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
                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                                    label="Max file size: 5MG"
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

            <StoreModal 
                open={open}
                success={success}
                loading={loading}
                action={
                    <div>
                        <Button 
                            href="/products/"
                            style={{marginRight: "5px", backgroundColor: "#457b9d"}}
                        >
                            Exit
                        </Button>
                        <Button 
                            href="/products/new/"
                            className={classes.save}
                        >
                            Add Item
                        </Button>
                    </div>
                }
            />
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
