import Head from 'next/head'

import styles from '../styles/contacts.module.css'

import { Box, Card, Container, Grid, Typography } from '@mui/material'
import { AiFillPhone, AiOutlineMail } from "react-icons/ai"
import ContactCard from '../components/contactCard'

export default function Contact(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>JOMAC</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Box component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}

            >

                <div className={styles.heroSection}>
                    <Typography variant='h1'>Get in touch</Typography>
                    <Typography variant="body1" sx={{marginTop:2, textAlign:'center'}}>Contact us for a quote and more information</Typography>

                </div>

                <Container maxWidth={false} className={styles.mainBox}>
                    <Grid
                        container
                        spacing={6}
                        className={styles.mainBox}
                    >
                        <Grid
                            item
                            lg={6}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <ContactCard icon={<AiFillPhone size={40} />} title="+26599993522" />
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <ContactCard icon={<AiOutlineMail size={40} />} title="info@jomacmw.com" />
                        </Grid>

                    </Grid>

                </Container>
                <Typography variant="h2" sx={{marginTop:5,marginBottom:1}}>Visit our shop</Typography>
                <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342.3498239260926!2d33.77151139483625!3d-13.884226978680104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d5151deb8191%3A0xda2c6ac1d844eb9d!2zMTPCsDUzJzAzLjMiUyAzM8KwNDYnMTcuMCJF!5e0!3m2!1sen!2smw!4v1645134640347!5m2!1sen!2smw" width="100%" height="100%" loading="lazy"></iframe>
                </div>

            </Box>
        </div>
    )
}
