import { Avatar, AvatarGroup } from "@mui/material"


const RightBarTop = () => {
  return (
    <AvatarGroup max={4} sx={{marginBottom:"1rem",justifyContent:"center"}}>
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        <Avatar alt="Travis Howard" src="https://picsum.photos/201" />
        <Avatar alt="Cindy Baker" src="https://picsum.photos/202" />
        <Avatar alt="Agnes Walker" src="https://picsum.photos/203" />
        <Avatar alt="Trevor Henderson" src="https://picsum.photos/204" />
    </AvatarGroup>
  )
}

export default RightBarTop