import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Paper, createTheme } from '@mui/material'
import Routings from './Routings'
import { color } from './Theme'
import { useSelector } from 'react-redux'

const App = () => {
  const { dark } = useSelector(state => state.mode)
  const theme = createTheme(color(dark))
  return(
    <ThemeProvider theme={theme}>
      <Paper>
        <Routings/>
      </Paper>
    </ThemeProvider>
  )
}

export default App