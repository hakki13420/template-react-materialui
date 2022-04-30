import React from 'react'
import ModalBox from './components/modal/ModalBox'
import styled from "@emotion/styled"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Feeds from "./components/feeds/Feeds"
import NavBar from "./components/NavBar"
import RightBar from "./components/rightbar/RightBar"
import SideBar from "./components/sidebar/SideBar"
import AddCircleIcon from '@mui/icons-material/AddCircle';


const AddBtn=styled(AddCircleIcon)({
  position:"fixed",
  bottom:"1rem",
  fontSize:"5rem",
  left:"1rem",  
  "&:hover":{    
    cursor:"pointer",
    color:"red"
  }
})

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [mode, setMode] = React.useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>   
      <NavBar />
      <Stack  direction="row" 
              justifyContent="space-between" 
              spacing={2}
              sx={{
                flexDirection:{
                  xs:"column",                  
                  sm:"row",
                },                
                paddingTop:"5rem"                
              }}
      >
        <SideBar mode={mode} setMode={setMode}/>
        <Feeds />
        <RightBar />
      </Stack>
      <AddBtn onClick={handleOpen}
              sx={{
                left:{
                  xs:"50%",
                  sm:'4rem'
                },
                transform:{
                  xs:"translateX(-50%)"
                }
              }}
      />  
      
      <ModalBox open={open} handleClose={handleClose}/>        

    </Box>
    </ThemeProvider>
  )
}

export default App