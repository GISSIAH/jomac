import { Card, CardMedia, CardContent, Typography, Chip, Button } from "@mui/material"
import styles from '../styles/card.module.css'
import { motion } from "framer-motion"
export default function ProductCard(props) {
    const { title, price, image } = props.product

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
                    image={image}
                    alt={title}
                    sx={{ width: '100%', height: '15vh' }}
                />
                <CardContent>
                    <Typography variant="h4" className={styles.propertyTitle}>{title}</Typography>
                    <Typography variant="h4" className={styles.propertyPrice}>{price}</Typography>
                    <Chip label="In Stock" variant="outlined" />
                </CardContent>
            </Card>
        </motion.div>
    )
}
