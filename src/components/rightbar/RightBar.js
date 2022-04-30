import { Box } from '@mui/material'
import Divider from '@mui/material/Divider'

import React from 'react'
import RightBarTop from './RightBarTop'
import RightBarCenter from './RightBarCenter'

const RightBar = () => {
  return (
    <Box flex={2} >
      <Box flex={2} 
          p={2}          
          position="fixed"
          sx={{
            display:{
              xs:"none",
              sm:"block"
            },          
            overflowY:"auto",
            height:'100vh',            
          }}   
      >
        <RightBarTop />       
        <Divider/>
        <RightBarCenter />
        <Divider/>
      </Box>
    </Box>
  )
}

export default RightBar