import React from 'react'

// Import Material UI libraries
import {Box, Typography, Grid, Button, Hidden, Tabs, Tab} from '@material-ui/core'
import {TabContext, TabList} from '@material-ui/lab';

import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

// Import others
import useStyle from './style'
import TableList from '../list/TableList';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`a11y-tabpanel-${index}`}
        aria-labelledby={`a11y-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}

const Items = () => {
    const classes = useStyle()
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box  display="flex" justifyContent="flex-end" pr={1}>
                <Box className={classes.tabCon}>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="simple tabs example"
                        className={classes.viewTabs}
                    >
                        <Tab className={classes.vTab} icon={<ListAltOutlinedIcon />} value="1" />
                        <Tab icon={<AppsOutlinedIcon />} value="2" />
                    </Tabs>
                </Box>
            </Box>
            {/* <ListAltOutlinedIcon /> */}
            {/* <AppsOutlinedIcon /> */}
            <Box>
                <TabPanel value={value} index="1">
                    <TableList />
                </TabPanel>
                {/* {<TableList />} */}
            </Box>
        </div>
    )
}

export default Items
