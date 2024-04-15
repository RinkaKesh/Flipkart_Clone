import React from 'react'
import {Box,styled} from '@mui/material'
import { menudata } from '../../assets/menudata'

const Menuwrapper=styled(Box)`
  display:flex;
  justify-content:space-around;
  margin:67px 40px 0 40px;
  background:#FFFAFA

`
const Card=styled(Box)`
   display:flex;
   align-items:center;
   flex-direction:column;

//    & >img {
//     height:80px;
//    }
   & >p{
    font-size:18px;
    color:gray
   }
`


const Menubar = () => {
  return (
    <Menuwrapper>
        {
            menudata.map((data)=>(
                <Card key={data.title}>
                    <img src={data.image} alt={data.title} />
                    <p>{data.title}</p>

                </Card>
            ))
        }


    </Menuwrapper>
  )
}

export default Menubar