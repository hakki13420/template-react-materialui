import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const SideBarListItem = (props) => {    
  return (
    <>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {props.icon}
              </ListItemIcon>
              <ListItemText primary={props.text} />
            </ListItemButton>
        </ListItem>
    </>
  )
}

export default SideBarListItem