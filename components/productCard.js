import { Card ,Box, CardContent, Typography, Chip, Button,Grid } from "@mui/material"
import styles from '../styles/card.module.css'
import { motion } from "framer-motion"
import {IoMdAdd} from "react-icons/io"

import { addToCart } from './actions/cartActions.js'
import Image from "next/image"
export default function ProductCard(props) {
    const {_id, name, description, price, images } = props.product
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
                sx={{ height:"400px", display: 'flex', flexDirection: 'column', }}
                {...props}
                display="flex"
                flexDirection="column"
                borderRadius={1}
                outline="1px solid #DCDCDC"
            >
                <Image src={images[0]} alt={name} width={300} height={250}/>
                
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
                  
                </CardContent>
            </Card>
        </motion.div>
    )
}
