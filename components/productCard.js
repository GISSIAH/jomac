import { Card, Box, CardContent, Typography, Chip, Button, Grid } from "@mui/material"
import styles from '../styles/card.module.css'
import { motion } from "framer-motion"
import { IoMdAdd } from "react-icons/io"

import Image from "next/image"
import { useEffect } from "react"
import { addToCart } from "../cart/actions"
function setItem(name) {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const item = localStorage.setItem('name', name)
        //console.log(item);
    }
}
export default function ProductCard(props) {
    const { _id, name, description, price, images } = props.product
    const pro = {
        id: _id,
        name: name,
        description: description,
        price: price,
        quantity: 1
    }
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MWK",
    });
    useEffect(() => {

    }, [])
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
        >
            <Card
                sx={{ display: 'flex', flexDirection: 'column', }}
                {...props}
                display="flex"
                flexDirection="column"
                borderRadius={1}
                outline="1px solid #DCDCDC"
            >
                <Image src={images[0]} alt={name} width={280} height={250} />

                <CardContent>
                    <Typography variant="h6" >{name}</Typography>
                    <Grid container spacing={6} >
                        <Grid item
                            lg={6}
                            md={6}
                            sm={6}
                            xl={6}
                            xs={6}>
                            <Typography variant="h6" >{formatter.format(price)}</Typography>
                        </Grid>


                    </Grid>



                </CardContent>
                <Box sx={{px:1,py:1}}>
                    <Button variant="contained" color="primary" onClick={() => {
                        addToCart(pro)
                    }}>Add to Cart</Button>
                </Box>

            </Card>
        </motion.div>
    )
}
