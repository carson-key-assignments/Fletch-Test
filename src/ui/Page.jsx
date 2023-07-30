// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    children: <></>,
    className: '',
};

function Page({ children, className }) {
    return (
        <div className={`flex flex-col w-screen h-screen overflow-scroll scrollbar-hide ${className}`}>{children}</div>
    );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
