import { Card, Box, CardContent, Typography, Chip, Button, Grid } from "@mui/material"
import styles from '../styles/card.module.css'
import { motion } from "framer-motion"
import { IoMdAdd } from "react-icons/io"

import Image from "next/image"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
export default function ProductCard(props) {
    const { _id, name, description, price, images } = props.product
    const pro = {
        id: _id,
        name: name,
        description: description,
        price: price
    }
    const dispatch = useDispatch();
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MWK",
    });
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
        >
            <Card
                sx={{ height: "400px", display: 'flex', flexDirection: 'column', }}
                {...props}
                display="flex"
                flexDirection="column"
                borderRadius={1}
                outline="1px solid #DCDCDC"
            >
                <Image src={images[0]} alt={name} width={300} height={250} />

                <CardContent>
                    <Typography variant="h5" >{name}</Typography>
                    <Grid container spacing={6} >
                        <Grid item
                            lg={6}
                            md={6}
                            sm={6}
                            xl={6}
                            xs={6}>
                            <Typography variant="h5" >{formatter.format(price)}</Typography>
                        </Grid>


                    </Grid>
                    <Chip label="In Stock" variant="outlined" color="primary" />
                    <Box sx={{marginTop:2}}>
                        <Button variant="contained" sx={{ width: 180 }} color="primary" onClick={() => {
                            dispatch(addToCart(pro))
                        }}>Add to Cart</Button>
                    </Box>

                </CardContent>

            </Card>
        </motion.div>
    )
}
