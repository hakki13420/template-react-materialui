import { Modal, Box, Button, TextField, Typography } from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

const ModalBox = (props) => {
  return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
        >
            <Box sx={style}>
            <Typography sx={{marginBottom:"20px"}}>
                New Post
            </Typography>
            <hr/>
            <TextField
                required
                id="outlined-required"
                label="Title"            
                fullWidth
                sx={{marginBottom:"20px",marginTop:"20px",}}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}            
                fullWidth
                sx={{marginBottom:"20px"}}
            />
            <hr/>
            <Box mt={2} sx={{
                display:"flex",
                justifyContent:"center",
                gap:"10px"
            }}>
            <Button color='primary' variant='contained'>Crate</Button>
            <Button color="error" 
                    variant="contained"
                    onClick={props.handleClose}
            >
                Cancel
            </Button>
            </Box>
            </Box>        
        </Modal>  
    )
}

export default ModalBox