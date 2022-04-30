import { Box, Divider, Switch, Typography } from '@mui/material'
import List from "@mui/material/List"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

import React from 'react'
import SideBarListItem from './SideBarListItem'

const SideBar = (props) => {
  return (
    <Box p={1} flex={1} sx={{      
      display:{
        xs:"none",
        sm:"flex"
      },
      flex:{
        sm:2,
        lg:1
      }
      }}>
      <Box flex={1} p={2} position="fixed">
        <Typography p={2}>
          Main Menu
        </Typography>
        <Divider />
        <List >
            <SideBarListItem icon={<InboxIcon/>} text="Inbox"/>
            <SideBarListItem icon={<DraftsIcon/>} text="drafts"/>
            <SideBarListItem icon={<DraftsIcon/>} text="drafts"/>
            <SideBarListItem icon={<DraftsIcon/>} text="drafts"/>                     
            <SideBarListItem icon={<DraftsIcon/>} text="drafts"/>                     
            <SideBarListItem icon={<DraftsIcon/>} text="drafts"/>                     
          </List>
          <Divider/>
          <Switch onChange={e=>props.setMode(props.mode === "light" ? "dark" : "light")}/>
      </Box>
    </Box>
  )
}


export default SideBar