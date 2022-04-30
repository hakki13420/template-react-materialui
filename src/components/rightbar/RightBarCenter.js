import { Divider, List } from '@mui/material'
import React from 'react'
import RightBarCenterItem from './RightBarCenterItem'

const RightBarCenter = () => {
  return (
    <List sx={{ width: '100%', marginBottom:"2rem", bgcolor: 'background.paper' }}>
   
      <RightBarCenterItem image="https://picsum.photos/200" title="Hakki rabah" />
      <Divider variant="inset" component="li" />      
    
      <RightBarCenterItem image="https://picsum.photos/202" title="Hakki rabah" />
      <Divider variant="inset" component="li" />
      
      <RightBarCenterItem image="https://picsum.photos/204" title="to Scott, Alex, Jennifer" />
      <Divider variant="inset" component="li" />
      
      <RightBarCenterItem image="https://picsum.photos/205" title="sandra adams" />
      <Divider variant="inset" component="li" />
      
      <RightBarCenterItem image="https://picsum.photos/206" title="Hakki rabah" />
      <Divider variant="inset" component="li" />      
      
      <RightBarCenterItem image="https://picsum.photos/206" title="Tomhas Edisson" />
      <Divider variant="inset" component="li" />      
      
    </List>

  )
}

export default RightBarCenter