import React from 'react'
import { Box, Typography } from '@mui/material';
import { Container} from '@mui/material'
import styles from "../styles/order.module.css"
import Head from 'next/head';
import { useState,useEffect } from 'react';
import axios from 'axios';

import CartItem from '../components/cartItem';
import { getCart } from '../cart/actions';

export default function Order() {

    const  [ cart,setCart] = useState([])
    useEffect(()=>{
        let tempCart = getCart()
        
        setCart(tempCart.cartItems)
        
    },[])
 
    return (
        <div className={styles.container}>
            <Head>
                <title>JOMAC</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}

            >
                <div className={styles.heading}>
                    <Typography variant="h1" >Your Order</Typography>
                </div>
                <Container maxWidth={false} className={styles.mainBox} sx={{marginTop:2}}>
                   {
                       cart.map(item=>{
                           return(
                               <CartItem name={item.name}/>
                           )
                       })
                   }
                </Container>

            </Box>
        </div>
    )
}
