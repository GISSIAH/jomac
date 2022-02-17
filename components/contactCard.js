import { Card, CardMedia, CardContent, Typography, Icon } from "@mui/material"
import styles from '../styles/card.module.css'
export default function ContactCard(props) {
    return (

        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            {...props}
        >

            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {props.icon}
                <Typography variant="body1" color="secondary">{props.title}</Typography>
            </CardContent>
        </Card>

    )
}
