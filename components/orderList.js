import { TableRow, TableCell, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io"
import { getCart } from '../cart/actions'
import CartItem from './cartItem'
import { removeFromCart } from '../cart/actions'
import { Fragment } from "react"
import { Box } from '@mui/system'
export default function OrderList() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        let tempCart = getCart()
        console.log(tempCart);
        console.log(tempCart);
        setCart(tempCart)

    }, [])


    if (cart.length <= 0) {
        return (
            <Box >
                <Typography variant="body1" color="lightslategray" sx={{px:5, textAlign: 'center' }}>
                    Found 0 items in your order.
                </Typography>
            </Box>

        )
    }
    else {
        return (
            cart.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <CartItem name={item.name} quantity={item.quantity} removeItem={() => {
                            removeFromCart({ name: item.name })
                            let tempCart = getCart()
                            setCart(tempCart)
                        }} />

                    </Fragment>

                )
            })
        )
    }


}
