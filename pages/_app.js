import Layout from '../components/layout'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'



export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({

    shape: {
      borderRadius: 8
    },
    palette: {
      primary: {
        main: "#c73e3e",
      },
      secondary: {
        main: "#116466"
      },


    },
    typography: {
      fontFamily: "Open Sans, sans serif",
      h1: {
        fontFamily: "Open Sans",
        fontSize: '3.0rem', [`@media screen and (max-width: 1440px)`]: {
          fontSize: "2.4rem"
        }, [`@media screen and (max-width: 1280px)`]: {
          fontSize: "2.2rem"
        }, [`@media screen and (max-width: 1024px)`]: {
          fontSize: "2.0rem"
        }, [`@media screen and (max-width: 768px)`]: {
          fontSize: "2.25rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.5rem"
        }, [`@media screen and (max-width: 375px)`]: {
          fontSize: "1.25rem"
        },
        fontWeight: 600
      },
      h2: {
        fontFamily: "Open Sans",
        fontSize:'3rem',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "2.5rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "2.5rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "2rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.5rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.25rem"
        },
        fontWeight: 600
      },
      h3: {
        fontFamily: "Open Sans",
        fontSize:'2.4rem',[`@media screen and (max-width: 1440px)`]: {
          fontSize: "2.2rem"
        },[`@media screen and (max-width: 1280px)`]: {
          fontSize: "1.9rem"
        },[`@media screen and (max-width: 1024px)`]: {
          fontSize: "1.8rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.5rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.05rem"
        },
        fontWeight: 500
      },
      h4: {
        fontFamily: "Open Sans",
        fontSize:'2rem',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "2rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "1.75rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.55rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.15rem"
        },
        fontWeight: 500
      },
      h5: {
        fontFamily: "Open Sans",
        fontSize:'1.5rem',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.35rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "1.3rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.15rem"
        },
        fontWeight: 400
      },
      h6: {
        fontFamily: "Open Sans",
        fontWeight: 400
        ,fontSize:'1.30rem',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.0rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "1.0rem"
        },[`@media screen and (max-width: 768px)`]: {
          fontSize: "1.0rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "0.8rem"
        },
      },
      button: {
        fontFamily: "Open Sans",
      }
    }
  })

  return (
  <ThemeProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ThemeProvider>

  )
}
