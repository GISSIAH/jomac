import Head from 'next/head'
import Image from 'next/image'
import CategoryCard from '../components/categoryCard'
import styles from '../styles/Home.module.css'
import { Box, Container, Grid, Typography } from '@mui/material'
import { categories } from '../menuItems/categories'
import { motion } from "framer-motion"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JOMAC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box 
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}

      >

        <div
          className={styles.heroSection}>
          <div
            className={styles.heroText}>
            <Typography variant="h1">
              Your Construction Needs
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <Typography variant="h1">
                Our Priority
              </Typography>

            </motion.div>


          </div>
        </div>
        <Typography variant="h2" className={styles.categoryHeading}>Browse by Category</Typography>
        <Box >
          <Grid
            container
            spacing={6}
          >
            {
              categories.map((cat, index) => (
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={6}
                  key={index}
                >
                  <CategoryCard image={cat.image} title={cat.title} url={cat.url} key={index} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
