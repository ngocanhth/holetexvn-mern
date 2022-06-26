import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <>
            <PostList></PostList>
        </>
    );
}

export default HomePage;