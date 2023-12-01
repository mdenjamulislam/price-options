import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className='py-1 px-3 md:px-4 md:py-0'><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
};

export default Link;