import { Typography, TableCell, TableRow, IconButton } from '@mui/material';
import React from 'react';
import { IoMdRemoveCircle } from "react-icons/io"
import { removeFromCart } from '../cart/actions';

export default function CartItem(props) {
  return (
    <TableRow >
      <TableCell ><Typography variant='h5'>{props.name}</Typography></TableCell>
      <TableCell ><Typography variant='h5'>{props.quantity}</Typography></TableCell>
      <TableCell >
        <IconButton onClick={() => {
         props.removeItem()
        }}>
          <IoMdRemoveCircle color="primary" size={32} />
        </IconButton>
      </TableCell>
    </TableRow>

  )
}
