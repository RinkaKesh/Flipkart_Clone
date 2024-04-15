import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import logo from "../../../public/logo/flipkart.svg"
import Searchbox from './Searchbox'
import Buttons from './Buttons'
//style
const StyledNav=styled(AppBar) `
background:white;
height:58px;
`

const Navbar = () => {
  return (
        <StyledNav>
           <Toolbar style={{minHeight:58}}>
            <Box>
                <img src={logo} alt="flipkart_logo" />
            </Box>
            <Searchbox/>
            <Buttons/>
           </Toolbar>
        </StyledNav>
  )
}

export default Navbar