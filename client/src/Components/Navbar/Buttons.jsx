import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0;
  width:38%;
  justify-content: space-around;


  & > div {
    margin-right: 30px;
    display: flex;
    align-items: center;
    margin-left:15px;
    cursor:pointer;
  }

  & .icon {
    color: gray;
    font-size: 24px;
    margin-right: 6px;
  }
  & #Login{
    padding:0 8px;
    border-radius:4px;
  }
  & #Login>button{
    color:gray;
    text-transform:none;
    font-size:17px;
   
  }
  & #Login:hover {
    background-color: blue; 
    height:43px;
    color:white ; 
  }
  

`

const StyledTypography=styled(Typography)`
color:gray`

const Buttons = () => {
  return (
    <ButtonContainer>
      <Box id="Login">
        <AccountCircleIcon className="icon"  />
        <Button variant="text">Login</Button>
      </Box>
      <Box>
        <ShoppingCartOutlinedIcon className="icon" />
        <StyledTypography>Cart</StyledTypography>
      </Box>
      <Box>
        <CardGiftcardIcon className="icon" />
        <StyledTypography>Become a Seller</StyledTypography>
      </Box>
    </ButtonContainer>
  )
}

export default Buttons
