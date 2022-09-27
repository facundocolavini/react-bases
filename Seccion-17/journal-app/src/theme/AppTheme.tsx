import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { purpleTheme } from "./purpleTheme"

type Props = {
    children: JSX.Element | JSX.Element[]
}



export const AppTheme = ( { children }: Props ) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}