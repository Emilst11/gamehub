import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createTheme, Paper } from '@mui/material'
import { useSelector } from 'react-redux'
import Routings from './Routings'

const App = () => {
  const { dark } = useSelector(state => state.mode)
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light'
    }
  })
  return(
    <ThemeProvider theme={theme}>
      <Paper>
        <Routings/>
      </Paper>
    </ThemeProvider>
  )
}

export default App