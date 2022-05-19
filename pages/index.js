import Head from 'next/head'
import CategoryCard from '../components/categoryCard'
import styles from '../styles/Home.module.css'
import { Box, Grid, Typography, Button } from '@mui/material'
import { categories } from '../menuItems/categories'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DealCard from '../components/dealCard'

export default function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`https://alpha-jomac.herokuapp.com/product/category/Plumbing`).then((res) => {
      console.log(res.data);
      setProducts(res.data)
    }).catch((err) => {
      alert("an error occured on our end")
    })
  }, [])
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
          //  justifyContent: 'center',
          //    alignItems: 'center'
        }}
      >
        <div
          className={styles.heroSection}>
          <div
            className={styles.heroText}>
            <Typography variant="h1">
              Suppliers of Hardware, Electrical & Plumbing Materials.
            </Typography>
            <Typography variant="h5" color="slategray" sx={{ marginTop: 5 }}>
              Browse our stocks and find original high quality materials.
            </Typography>
            <div className={styles.buttonContainer}>
              <Button variant='contained' color='primary' sx={{ width: 180,borderRadius:0 }}>
                Browse Categories
              </Button>
              <Button variant='outlined' color='primary' sx={{ width: 180,marginLeft:5,borderRadius:0 }}>
                All Products
              </Button>
            </div>

          </div>
          <div className={styles.ovalParent}>
            <img src="https://res.cloudinary.com/attic-gis/image/upload/v1652950831/Asset_1_ajsbj0.png" className={styles.ovalImageBig} />
            <img src="https://res.cloudinary.com/attic-gis/image/upload/v1652951164/Asset_2_mbpxtv.png" className={styles.ovalImageSmall} />
          </div>
        </div>
        <div className={styles.dealsSection}>
          <Typography variant='h3'>WEEKLY DEALS</Typography>
          <div className={styles.dealsItems}>
            <Grid
              container
              spacing={6}
            >
              {products.slice(0, 4).map((product) => {
                return (
                  <Grid
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xl={3}
                    xs={12}
                  >
                    <DealCard
                      product={product}
                    />

                  </Grid>

                )
              })}
            </Grid>
          </div>

        </div>
        <div className={styles.categorySection}>
          <Typography variant="h3">CATEGORIES</Typography>
          <div className={styles.categoryItems}>
            <Grid

              container
              spacing={6}
              sx={{ px: 1 }}
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
          </div>

        </div>

      </Box>
    </div>
  )
}
