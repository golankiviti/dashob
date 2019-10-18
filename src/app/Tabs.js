import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minWidth: 0
  }
})
export default function MyTabs() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

    return <div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item 1" id={1} classes={classes}/>
          <Tab label="Item 2" id={2}/>
          <Tab label="Item 3" id={3}/>
          <Tab label="Item 4" id={4}/>
          <Tab label="Item 5" id={5}/>
          <Tab label="Item 6" id={6}/>
          <Tab label="Item 7" id={7}/>
          <Tab label="Item 8" id={8}/>
          <Tab label="Item 9" id={9}/>
          <Tab label="Item 10" id={10}/>
          <Tab label="Item 11" id={11}/>
        </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item 7
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item 9
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item 10
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item 11
      </TabPanel>
    </div>
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return index === value ? <div>{children}</div> : null
}