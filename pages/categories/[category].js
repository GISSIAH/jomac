import React from 'react'
import { useRouter } from "next/router";
import { Box, Typography } from '@mui/material';
import { Container, Grid } from '@mui/material'
import styles from "../../styles/category.module.css"
import Head from 'next/head';
import ProductCard from '../../components/productCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../cart/actions';

export default function Category() {
    const [products,setProducts] = useState([])
    const router = useRouter()
    const title = router.query.category

    useEffect(()=>{
        console.log(getCart());
        axios.get(`https://alpha-jomac.herokuapp.com/product/category/${title}`).then((res)=>{
            console.log(res.data);
            setProducts(res.data)
        }).catch((err)=>{
            alert("an error occured on our end")
        })
    },[title])

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
                    <Typography variant="h1" >{title}</Typography>
                </div>
                <Container maxWidth={false} className={styles.mainBox}>
                    <Grid
                        container
                        spacing={6}
                    >
                        {products.map((product) => {
                            return (
                                <Grid
                                    item
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xl={3}
                                    xs={6}
                                >
                                    <ProductCard
                                        product={product}
                                    />

                                </Grid>

                            )
                        })}
                    </Grid>
                </Container>

            </Box>
        </div>
    )
}
