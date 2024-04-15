import React from 'react'
import{InputBase,styled,Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
background:aliceblue;
width:38%;
height:38px;
border-radius:8px;
margin-left:45px;
display:flex;
alignItems:center;
`

const SearchField=styled(InputBase)`
width:100%;
height:100%;
padding-right:12px
`

const IconBox=styled(Box)`
color:gray;
height:100%;
padding:5px 10px;
.MuiSvgIcon-root {
    font-size: 30px; 
  }
`

const Searchbox = () => {
  return (
    <SearchContainer>
        <IconBox><SearchIcon/></IconBox>
        <SearchField placeholder='Search for Products, Brands and More' inputProps={{maxLength:45}}/>
    </SearchContainer>
  )
}

export default Searchbox