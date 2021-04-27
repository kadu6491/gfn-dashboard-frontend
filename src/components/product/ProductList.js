import React from 'react'

// Import Material UI libraries
import {Box, Typography, Grid, Button, Hidden} from '@material-ui/core'


// Import Material Icons
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import Category from './Category'

// Import Graph components

// Import others
import useStyle from './style'
import BestSeller from './BestSeller';

const ProductList = () => {
    const classes = useStyle();

    return (
        <div>
            <Box mt={3}>
                <Hidden smUp implementation="css">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        // spacing={2}
                        // style={{backgroundColor: "red"}}
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.newBtn}
                                startIcon={<AddCircleOutlinedIcon />}
                            >
                                New Item
                            </Button>
                        </Grid>

                        <Button
                            variant="contained"
                            className={classes.newBtn}
                            startIcon={<AddCircleOutlinedIcon />}
                        >
                            New Category
                        </Button>
                    </Grid>
                </Hidden>

                <Hidden xsDown implementation="css">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                       <Grid item className={classes.newAdds}>
                            <Box m={2}>
                                <Button
                                    className={classes.newBtn}
                                >
                                    <AddCircleOutlinedIcon className={classes.icon} />
                                    <Typography align="left" variant="subtitle2" className={classes.typo}>
                                        <span className={classes.typo1}>New Item</span> <br />
                                        <Hidden mdDown implementation="css">
                                            <span className={classes.typo2}>Click to add new product</span>
                                        </Hidden>
                                    </Typography>
                                    
                                </Button>
                            </Box>
                       </Grid>

                       <Grid item className={classes.newAdds}>
                            <Box m={2}>
                                <Button
                                    className={classes.newBtn}
                                >
                                    <CategoryOutlinedIcon className={classes.icon} />
                                    <Typography align="left" variant="subtitle2" className={classes.typo}>
                                        <span className={classes.typo1}>New Category</span> <br />
                                        <Hidden mdDown implementation="css">
                                            <span className={classes.typo2}>Click to add new category</span>
                                        </Hidden>
                                    </Typography>
                                    
                                </Button>
                            </Box>
                       </Grid>

                       <Grid item className={classes.newAdds}>
                            <Box m={2}>
                                <Button
                                    className={classes.newBtn}
                                    disabled
                                >
                                    <BookmarkOutlinedIcon className={classes.icon} />
                                    <Typography align="left" variant="subtitle2" className={classes.typo}>
                                        <span className={classes.typo1}>Total Items</span> <br />
                                        <Hidden mdDown implementation="css">
                                            <span className={classes.typo2}>0000</span>
                                        </Hidden>
                                    </Typography>
                                    
                                </Button>
                            </Box>
                       </Grid>

                    </Grid>
                </Hidden>
                <br />
                
                <Category />
                <BestSeller />
            </Box>
        </div>
    )
}

export default ProductList
