import React from 'react'

// Import Material UI libraries
import {Box, Tab} from '@material-ui/core'
import {TabContext, TabList, TabPanel} from '@material-ui/lab';

// Import Material Icons
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMall';

// Import Graph components

// Import others
import useStyle from './style'
import BestSeller from './BestSeller';
import Items from './Items';

const ProductList = () => {
    const classes = useStyle();
    const [value, setValue] = React.useState(`1`);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box bgcolor="white" className={classes.root}>
                <Box bgcolor="inherit" className={classes.container}>
                   <TabContext value={value}>
                       <div>
                            <TabList 
                                onChange={handleChange} 
                                indicatorColor="primary" 
                                aria-label="simple tabs example"
                                className={classes.tabList}
                                textColor="inherit"
                                
                            >
                                <Tab icon={<LocalMallIcon />} label="Products" value="1" className={classes.tabs}/>
                                <Tab icon={<CategoryOutlinedIcon />}  label="Category" value="2" className={classes.tabs} />
                                <Tab icon={<AssignmentTurnedInIcon />} label="Best Seller" value="3" className={classes.tabs} />
                            </TabList>
                       </div>

                        <TabPanel value="1">
                            <Box className={classes.value1}>
                                <Items />
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">
                            <Box pt={2}  className={classes.value1}>
                                <h4>Hello y all</h4>
                            </Box>
                        </TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                   </TabContext>

                    {/* <Tab icon={<CategoryOutlinedIcon />} label="Category" /> */}
                        {/* <Tab icon={<BookmarkOutlinedIcon />} label="Products" /> */}
                        {/* <Tab icon={<AddCircleOutlinedIcon />} label="Best Seller" /> */}
                </Box>
            </Box>
        </div>
    )
}

export default ProductList
