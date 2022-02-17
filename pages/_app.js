import Layout from '../components/layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"
import Reducer from '../components/reducer'
import { createTheme, ThemeProvider } from '@mui/material'



export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    
    shape:{
      borderRadius:10
    },
    palette:{
      primary:{
        main:"#05445E",
      },
      secondary:{
        main:"#116466"
      },

      
    },
    typography:{
      fontFamily:"Open Sans",
      h1:{
        fontFamily:"Open Sans",
        fontWeight:600
      },
      h2:{
        fontFamily:"Open Sans",
        fontWeight:600
      },
      h3:{
        fontFamily:"Open Sans",
        fontWeight:500
      },
      h4:{
        fontFamily:"Open Sans",
        fontWeight:500
      },
      h5:{
        fontFamily:"Open Sans",
        fontWeight:400
      },
      h6:{
        fontFamily:"Open Sans",
        fontWeight:400
      },
      button:{
        fontFamily:"Open Sans",
      }
    }
  })
  
  return (
    <ThemeProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ThemeProvider>

  )
}