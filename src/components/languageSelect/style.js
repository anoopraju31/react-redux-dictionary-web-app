import { createTheme } from '@material-ui/core'

const colors = {
    fontColor: '#2E3F41',
    background: '#E9FBF8',
}

const theme = createTheme({
    palette: {
        primary: {
            main: colors.fontColor,
        },
        background: {
            paper: colors.background,
        },
        text: {
            primary: colors.fontColor,
        },
        type: 'light'
    },
  })

export default theme