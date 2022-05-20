import { Box, Typography } from '@mui/material';
import React from 'react';
import {IoMdRemoveCircle} from "react-icons/io"

export default function CartItem(props) {
  return <Box sx={{display:'flex', justifyContent:'space-between',px:10}}>
    <Typography variant='h5'>{props.name}</Typography>
    <IoMdRemoveCircle color="primary" size={32}/>
  </Box>
}
