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
                    <Typography variant="h4" className={styles.propertyTitle}>{name}</Typography>
                    <Grid container spacing={6} >
                        <Grid item
                            lg={6}
                            md={6}
                            sm={6}
                            xl={6}
                            xs={6}>
                            <Typography variant="h4" className={styles.propertyPrice}>{formatter.format(price)}</Typography>
                        </Grid>
                        <Grid item
                            lg={4}
                            md={4}
                            sm={4}
                            xl={4}
                            xs={4}>
                            <Chip label="In Stock" variant="outlined" />
                        </Grid>

                    </Grid>


                </CardContent>
            </Card>
        </motion.div>
    )
}
