import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles"

let theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        hollow: {
            main: '#edf2ff',
        },
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            xsm: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            lg1280: 1280,
            xl: 1536
        }
    },
    customSpacing: {
        xs: 1.5,
        xsm: 1.5,
        sm: 2,
        md: 3,
        lg: 4.5,
        xl: 4.5
    },

    components: {
        // Name of the component
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '20px',
                    paddingRight: '20px',
                },
                disableGutters: true

                // maxWidthLg: {
                //     [theme.breakpoints.up('lg')]: {
                //         maxWidth: '1240px'
                //     },

                //     // Note that you can customize other properties here, like padding, color, .etc.
                // }
            }
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: '#fff',
                    '&$hover': {
                        backgroundColor: 'blue',
                        color: '#fff',
                    }
                }

            },
        },
    },
})

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

export default theme
