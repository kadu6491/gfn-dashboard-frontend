import React from 'react'

// Import Material UI libraries
import {Box, Tab} from '@material-ui/core'
import {TabContext, TabList, TabPanel} from '@material-ui/lab';

// Import Material Icons
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const TabDesign = (props) => {
    const [value, setValue] = React.useState(`1`);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box bgcolor="red" p={2}>
                <Box bgcolor="green">
                    <TabContext value={value}>
                        <div>
                            <TabList 
                                onChange={handleChange} 
                                indicatorColor="primary" 
                                aria-label="simple tabs example"
                                // className={classes.tabList}
                                textColor="inherit"
                                
                            >
                                {props.tabs}
                            </TabList>
                        </div>

                        <TabPanel {...props.value} >
                            <Box>
                                <h4>Tab 2000</h4>
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">
                            <Box pt={2}>
                                <h4>Hello y all</h4>
                            </Box>
                        </TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </div>
    )
}

export default TabDesign
