import { Card, CardMedia, CardContent, Typography, Chip, Button, Grid } from "@mui/material"
import styles from '../styles/card.module.css'
import { motion } from "framer-motion"
export default function ProductCard(props) {
    const { name, description, price, images } = props.product
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
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                {...props}
            >
                <CardMedia
                    image={images[0]}
                    alt={name}
                    sx={{ width: '100%', height: '15vh' }}
                />
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
                    <Chip label="In Stock" variant="outlined" />

                </CardContent>
            </Card>
        </motion.div>
    )
}
