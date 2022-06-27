import { green, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles"
import "@fontsource/lato";

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
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 22,
                    textDecorationLine: 'underline',
                    color: '#131313',
                    '&:hover': {
                        color: '#314CB4'
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
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        // border: `2px dashed grey${blue[500]}`,
                        backgroundColor: '#131313',
                        color: '#fff',
                        fontWeight: 700,
                        '&:hover, &:focus, &:active': {
                            backgroundColor: '#323233',
                            boxShadow: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        // border: `2px dashed grey${blue[500]}`,
                        backgroundColor: '#F8485E',
                        color: '#fff',
                        fontWeight: 700,
                        '&:hover, &:focus, &:active': {
                            backgroundColor: '#FF7182',
                            boxShadow: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'hollow' },
                    style: {
                        backgroundColor: '#fff',
                        border: `1px solid #B0B0B0`,
                        color: '#131313',
                        fontWeight: 500,
                        '&:hover, &:focus, &:active': {
                            backgroundColor: '#323233',
                            borderColor: '#323233',
                            color: '#fff',
                            fontWeight: 700,
                        },
                    },
                },
                {
                    props: { variant: 'disabled' },
                    style: {
                        fontWeight: 500,
                        color: '#B0B0B0',
                        backgroundColor: '#E6E6E6',
                    },
                },
            ],
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(
                        // ownerState.variant === 'contained' &&
                        // ownerState.color === 'primary' && 
                        {
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 14,
                        lineHeight: 20,
                        letterSpacing: '0.5px',
                        padding: '14px 18px',
                        borderRadius: '0',
                        minWidth: '196px',
                        height: 48,
                        boxShadow: 'none'
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
