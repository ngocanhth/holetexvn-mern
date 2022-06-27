import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles"
import "@fontsource/lato";
import { darkScrollbar } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#131313',
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
            primary: '#131313',  // Color will set for body tag
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        link: {
            main: '#131313',
            hover: '#314CB4',
            active: '#314CB4',
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

            // Font for body tag

            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            letterSpacing: 'normal',
        },
        h1: {
            fontFamily: '"Poppins", sans-serif',
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 36,
            lineHeight: '44px',
            letterSpacing: 'normal',
        },

        h2: {
            fontFamily: '"Poppins", sans-serif',
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 30,
            lineHeight: '37px',
            letterSpacing: 'normal',
        },

        h3: {
            fontFamily: '"Poppins", sans-serif',
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 24,
            lineHeight: '36px',
            letterSpacing: 'normal',
        },

        h4: {
            fontFamily: '"Poppins", sans-serif',
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 18,
            lineHeight: '26px',
            letterSpacing: 'normal',
        },

        h5: {
            fontFamily: '"Poppins", sans-serif',
            color: '#131313',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '28px',
            letterSpacing: 'normal',
        },

        link: {
            textDecoration: 'none',
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
            body: {
                fontSize: 16
            }
        }
    },

    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true,
            },
        },

        MuiLink: {
            defaultProps: {
                // The props to change the default for.
                underline: 'hover',
            },
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                    textDecoration: 'none',
                },
                underlineHover: {
                    'textDecorationColor': '#000'
                }
            },
        },
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
