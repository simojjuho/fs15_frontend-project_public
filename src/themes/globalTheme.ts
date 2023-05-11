import { PaletteMode } from "@mui/material"


const customTheme = (mode: PaletteMode) => ({
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontFamily: 'Poppins-Bold, sans-serif',
            fontSize: '4em',
            fontWeight: '900'
            
        },
        h2: {
            fontFamily: 'Poppins-Bold'
        },
    },
    palette: {
        mode,
        ...(mode === 'light'
        ? {
            primary: {
                light:'#e1dcd7',
                main: '#074a41',
                contrastText: '#FFF'
            },
            secondary: {
                main: '#FFF',
                contrastText: '#FFF'
            }
        }
        : {
            primary: {
                light:'#2e5952',
                main: '#04201c',
                contrastText: '#dedede'
        },
            secondary: {
                main: '#0b0b0b',
                contrastText: '#dedede'
            }
        })
    },
})


export default customTheme

/* 
primaryColor1: #074a41 rgb(7, 74, 65)
primaryColor2: e1dcd7 rgb(225, 220, 215)
primaryColor3: #FFF  rgb(255, 255, 255)
secondaryColor: #000
complementaryColor1: #ffbab6 rgb(254, 252, 136)
complementaryColor2: #fe7f63 rgb(244, 74, 255)
 */