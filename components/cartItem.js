import { Typography,TableCell } from '@mui/material';
import React from 'react';
import { IoMdRemoveCircle } from "react-icons/io"

export default function CartItem(props) {
  return (
    <>
      <TableCell ><Typography variant='h5'>{props.name}</Typography></TableCell>
      <TableCell ><Typography variant='h5'>{props.quantity}</Typography></TableCell>
      <TableCell ><IoMdRemoveCircle color="primary" size={32}/></TableCell>
    </>

  ) 
}
