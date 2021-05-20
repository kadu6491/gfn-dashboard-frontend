import React from 'react'

import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import {Box, Divider, Tab} from '@material-ui/core'

// Import Material Icons
import ScheduleIcon from '@material-ui/icons/Schedule';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { LocalShipping } from '@material-ui/icons';

import useStyle from './style'
import AllOrders from './AllOrders';
import NewOrders from './NewOrders';
import PendingOrder from './PendingOrder';

import ShippedOrder from './ShippedOrder';

const ViewOrders = () => {
    const classes = useStyle();
    const [value, setValue] = React.useState(`1`);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box bgcolor="white" className={classes.root}>
                <Box className={classes.container}>
                    <TabContext value={value}>
                        <div className={classes.tabDiv}>
                            <TabList 
                                onChange={handleChange} 
                                indicatorColor="primary" 
                                aria-label="simple tabs example"
                                className={classes.tabList}
                                textColor="inherit"
                                variant="scrollable"
                                scrollButtons="auto"
                                
                            >
                                <Tab icon={<CreditCardIcon />} label="All Orders" value="1" className={classes.tabs} />
                                <Tab icon={<FiberNewIcon />}  label="New" value="2" className={classes.tabs} />
                                <Tab icon={<ScheduleIcon />} label="Pending" value="3" className={classes.tabs} />
                                <Tab icon={<LocalShipping />} label="Shipped" value="4" className={classes.tabs} />
                            </TabList>
                        </div>
                        <Divider />
                        <TabPanel value="1" className={classes.value1}>
                            <Box>
                                <AllOrders />
                            </Box>
                        </TabPanel>
                        <TabPanel value="2" className={classes.value1}>
                            <Box>
                                <NewOrders />
                            </Box>
                        </TabPanel>
                        <TabPanel value="3" className={classes.value1}>
                            <Box>
                                <PendingOrder />
                            </Box>
                        </TabPanel>
                        <TabPanel value="4" className={classes.value1}>
                            <Box>
                                <ShippedOrder />
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
            {/* <Tab icon={<LocalMallIcon />} label="Products" value="1" />
            <Tab icon={<CategoryOutlinedIcon />}  label="Category" value="2" />
            <Tab icon={<AssignmentTurnedInIcon />} label="Best Seller" value="3" /> */}
        </div>
    )
}

export default ViewOrders
