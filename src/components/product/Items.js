import React from 'react'

// Import Material UI libraries
import {Box, Button, Hidden, Tabs, Tab} from '@material-ui/core'
import {withStyles } from '@material-ui/core/styles';

import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

// Import others
import useStyle from './style'
import TableList from '../list/TableList';
import GridLists from '../list/GridLists';

const AntTab = withStyles({
    root: {
    //   backgroundColor: "green",
      maxWidth: 60,
      minWidth: 60,
      textTransform: 'none',
      '&$selected': {
            color: "#411e8f"
        },
    },
    selected: {},
})(Tab);

const AntTabs = withStyles({
    root: {
    //   backgroundColor: "green",
      width: "120px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    indicator: {
        backgroundColor: 'white',
    },
})(Tabs);


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
            
            <Box display="flex" justifyContent="flex-end" pr={1}>
                <div className={classes.tabCon}>
                    <Button 
                        variant="contained"
                        className={classes.btnAdd}
                        startIcon={<AddCircleRoundedIcon />}
                        href="/products/new"
                    >
                        New Item
                    </Button>
                    <Hidden xsDown implementation="js">
                        <AntTabs 
                            value={value} 
                            onChange={handleChange} 
                            aria-label="simple tabs example"
                            centered
                        >
                            <AntTab wrapped icon={<ListAltOutlinedIcon />} value="1" />
                            <AntTab wrapped icon={<AppsOutlinedIcon />} value="2" />
                        </AntTabs>
                    </Hidden>
                </div>
            </Box>
            {/* <ListAltOutlinedIcon /> */}
            {/* <AppsOutlinedIcon /> */}
            <Box>
                <Hidden xsDown implementation="js">
                    <TabPanel value={value} index="1">
                        <TableList />
                    </TabPanel>
                    <TabPanel value={value} index="2">
                        <GridLists />
                    </TabPanel>
                </Hidden>

                <Hidden smUp implementation="js">
                    <br />
                    <GridLists />
                </Hidden>
            </Box>
        </div>
    )
}

export default Items
