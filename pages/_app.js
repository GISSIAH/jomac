import Layout from '../components/layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"
import Reducer from '../components/reducer'
import { createTheme, ThemeProvider } from '@mui/material'



export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({

    shape: {
      borderRadius: 10
    },
    palette: {
      primary: {
        main: "#05445E",
      },
      secondary: {
        main: "#116466"
      },


    },
    typography: {
      fontFamily: "Open Sans",
      h1: {
        fontFamily: "Open Sans",
        fontSize: '3.5rem', [`@media screen and (max-width: 1200px)`]: {
          fontSize: "3rem"
        }, [`@media screen and (max-width: 992px)`]: {
          fontSize: "2rem"
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
        fontSize:'2.5rem',[`@media screen and (max-width: 1200px)`]: {
          fontSize: "2.5rem"
        },[`@media screen and (max-width: 992px)`]: {
          fontSize: "2rem"
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
          fontSize: "155rem"
        },[`@media screen and (max-width: 600px)`]: {
          fontSize: "1.25rem"
        },[`@media screen and (max-width: 375px)`]: {
          fontSize: "1.15rem"
        },
        fontWeight: 500
      },
      h5: {
        fontFamily: "Open Sans",
        fontWeight: 400
      },
      h6: {
        fontFamily: "Open Sans",
        fontWeight: 400
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
