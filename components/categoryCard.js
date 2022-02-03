import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import Link from "next/link"
import styles from '../styles/card.module.css'
export default function CategoryCard(props) {
    return (
        <Link href={props.url}>
            <a>
                <Card className={styles.card}>
                    <CardMedia
                        image={props.image}
                        alt={props.title}
                        className={styles.image}
                    />
                    <CardContent>
                        <Typography variant="h4" color="secondary" className={styles.categoryTitle}>{props.title}</Typography>
                    </CardContent>
                </Card>
            </a>

        </Link>

    )
}
