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

function Main({ children, className }) {
    return (
        <main className={`flex flex-col flex-grow w-screen h-fit overflow-scroll scrollbar-hide ${className}`}>
            {children}
        </main>
    );
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
