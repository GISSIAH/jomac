import { Card, CardMedia, CardContent, Typography, Chip ,Button} from "@mui/material"

import styles from '../styles/card.module.css'


export default function ProductCard(props) {
    const {title,price,image} = props.product

    return (
        <div>
            <Card className={styles.productCard}>
                <CardMedia
                    image={image}
                    alt={title}
                    className={styles.image}
                />
                <CardContent>
                    <Typography variant="h4" className={styles.propertyTitle}>{title}</Typography>
                    <Typography variant="h4" className={styles.propertyPrice}>{price}</Typography>
                    <Chip label="In Stock" variant="outlined"/>
                </CardContent>
            </Card>
        </div>
    )
}
