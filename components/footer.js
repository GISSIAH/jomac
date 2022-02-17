import { Box, Grid, Typography } from "@mui/material"
import Link from "next/link"
import styles from "../styles/footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.foot}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}

      >
        <div className={styles.footerGrid}>
          <Grid
            container
            spacing={6}

          >
            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}
              xs={5}
              sm={6}
              md={6}
              lg={3}
              xl={3}
            >
              <Typography variant="h4">Company</Typography>
              <Link href="/about"><Typography variant="body1">About</Typography></Link>
              <Link href="/contact"><Typography variant="body1">Contact</Typography></Link>
            </Grid>


            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                gap: '10px'
              }}
              xs={7}
              sm={6}
              md={6}
              lg={6}
              xl={6}
            >
              <Typography variant="h4">Categories</Typography>
              <Link href="/categories/Plumbing"><a><Typography variant="body1">Plumbing</Typography></a></Link>
              <Link   href="/categories/Electrical"><a><Typography variant="body1">Electrical</Typography></a></Link>
              <Link  href="/categories/Building"><a><Typography variant="body1">Building</Typography></a></Link>
              <Link href="/categories/Wiring"><a><Typography variant="body1">Wiring</Typography></a></Link>
            </Grid>
            <Grid item
              sx={{
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                gap: '10px'
              }}
              xs={6}
              sm={6}
              md={6}
              lg={3}
              xl={3}
            >
              <Typography variant="h4">Social</Typography>
              <Typography variant="body1">Twitter</Typography>
              <Typography variant="body1">Facebook</Typography>
              <Typography variant="body1">Instagram</Typography>
            </Grid>

          </Grid>
        </div>

      </Box>
    </footer>

  )
}
