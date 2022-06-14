import React, { useState } from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from "../styles/order.module.css"
import Head from 'next/head';
import axios from 'axios';

import OrderList from '../components/orderList';
import { useFormik } from 'formik';

export default function Order() {
    const [open, setOpen] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            phone: ""
        },
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                <div className={styles.tableContainer}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <OrderList />
                            </TableBody>
                        </Table>

                    </TableContainer>
                </div>
                <div className={styles.sendButton}>
                    <Button variant="contained" onClick={() => setOpen(true)}>Send Order</Button>
                </div>
                <Dialog open={open}>
                    <DialogTitle>
                        <Typography>Send Order</Typography>
                    </DialogTitle>
                    <DialogContent>
                       
                            <form onSubmit={formik.onSubmit}>
                         
                                <TextField variant='outlined' label="Name" onChange={formik.handleChange} name="name" id="name" value={formik.values.name} type="text" />
                                <TextField variant='outlined' label="Email" onChange={formik.handleChange} name="email" id="email" value={formik.values.email} type="text" />
                                <TextField variant='outlined' label="Phone" onChange={formik.handleChange} name="phone" id="phone" value={formik.values.phone} type="text" />
                                <button type="submit" variant="contained">Send</button>
                  
                            </form>
                      
                    </DialogContent>
                </Dialog>

            </Box>
        </div>
    )
}
