import { Box,Card, CardContent, Typography, Chip, Grid } from "@mui/material"


import Image from "next/image"
export default function DealCard(props) {
    const { _id, name, description, price, images } = props.product
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MWK",
    });
    return (
        <Card
            sx={{ height: "380px", display: 'flex', flexDirection: 'column',background:'#f5f5f5' }}
            {...props}
            display="flex"
            flexDirection="column"

        >
            <Image src={images[0]} alt={name} width={280} height={250} />

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
    )
}

