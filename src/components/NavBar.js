import { Avatar, Badge, Box, InputBase } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import ApiIcon from '@mui/icons-material/Api';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import styled from '@emotion/styled';
import { Notifications } from '@mui/icons-material';

const StyledToolBar=styled('div')({
  display:"flex",
  justifyContent:"space-between",
  padding:"20px"
})

const Search=styled('div')({
  background:"white",
  borderRadius:"10px",
  padding:"0 10px",
  width:'40%'
})

const Icons=styled(Box)(({theme})=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  borderRadius:"10px",
  padding:"0 10px",
  // [theme.breakpoints.up("sm")]:{
  //   display:"flex"
  // }
  
}))

const BoxUser=styled(Box)({
  display:"flex",
  gap:"10px",
  
})

const NavBar = () => {
  const [open, setOpen]=React.useState(false)

  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true)
  }
  return (
    <Box>
      <AppBar position="fixed" color="primary">
        <StyledToolBar>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
            HakkiDev
          </Typography>
          <ApiIcon sx={{display:{xs:"block",sm:"none"}}} />
          <Search><InputBase placeholder='search...'/></Search>
          
          <Icons sx={{
              display:{
                xs:"none",
                sm:"flex"
              }
            }}>
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications color="action" />
            </Badge>
          </Icons>         

            <BoxUser sx={{
              display:{
                xs:"flex",                
              },
              cursor:"pointer"
            }}
            onClick={handleOpen}
            >
              <Avatar src='https://www.google.fr/imgres?imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fwebsite-internet%2F48%2Fwebsite_-_male_user-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F3440844%2Favatar_male_man_person_profile_user_website_icon&tbnid=1qLOfQ9Z8Grm7M&vet=12ahUKEwikt4Kzh7P3AhUBehoKHdgdBEIQMyg-egQIARBY..i&docid=_ddUWaYuLo8gLM&w=512&h=512&q=avatar%20web&ved=2ahUKEwikt4Kzh7P3AhUBehoKHdgdBEIQMyg-egQIARBY' 
                      sx={{width:"25px",height:"25px"}}                     
              />
              <Typography variant="span">Hakki</Typography>
            </BoxUser>
        </StyledToolBar>
      </AppBar>

      <Menu
        id="basic-menu"
        //anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose} >Profile</MenuItem>
        <MenuItem onClick={handleClose} >My account</MenuItem>
        <MenuItem onClick={handleClose} >Logout</MenuItem>
      </Menu>
      
    </Box>
  )
}

export default NavBar