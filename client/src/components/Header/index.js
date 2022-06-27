import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

function Header(props) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'center', mb: 2, backgroundColor: 'blue', height: 50}}>
            <Typography variant='h1' align='center' sx={{backgroundColor: 'blue', color: '#fff'}}>Header</Typography>
        </Box>
    );
}

export default Header;