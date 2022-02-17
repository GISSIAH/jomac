import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from '../styles/card.module.css'
export default function CategoryCard(props) {
    return (
        <motion.div
        whileHover={{
            scale:1.05,
        }}  
        >
            <Link href={props.url}>
                <a>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        {...props}
                    >
                        <CardMedia
                            image={props.image}
                            alt={props.title}
                            sx={{ width: '100%', height: '15vh' }}
                        />
                        <CardContent>
                            <Typography variant="h5" className={styles.categoryTitle}>{props.title}</Typography>
                        </CardContent>
                    </Card>
                </a>
            </Link>
        </motion.div>
    )
}
