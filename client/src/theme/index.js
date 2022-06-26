import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles"
import "@fontsource/lato";

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
    typography: {
        allVariants: {
            fontFamily: [
                'Lato',
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 14,
        },
        h2: {
            fontFamily: 'Roboto',
        }

    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [
                    'Lato',
                    'Roboto',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            xsm: 450,
            sm: 640,
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
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    backgroundColor: '#fff',
                    '@media (min-width:640px)': {
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    },
                    '@media (min-width:768px)': {
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    },
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
        
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            },

            styleOverrides: {
                root: {
                    fontSize: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'blue',
                        color: 'red',
                    }
                }
            }
        },

        MuiButtonBase: {
                defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
        
        // MuiButton: {
        //     styleOverrides: {
        //         // Name of the slot
        //         root: {
        //             // Some CSS
        //             fontSize: '20px',
        //             padding: '10px 20px',
        //             backgroundColor: 'blue',
        //             color: '#fff',
        //             '&:hover': {
        //                 backgroundColor: 'blue',
        //                 color: '#fff',
        //             }
        //         }


        //     },
        // },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                        backgroundColor: '#202020',
                        color: '#fff',
                        padding: '10px 20px',
                    }),
                }),
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
