// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    headerClassName: PropTypes.string,
    h1ClassName: PropTypes.string,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    children: <></>,
    headerClassName: '',
    h1ClassName: '',
};

function Header({ children, headerClassName, h1ClassName }) {
    return (
        <header className={`w-screen py-4 bg-slate-600 ${headerClassName}`}>
            <h1 className={`mx-auto w-fit text-2xl font-bold text-white ${h1ClassName}`}>{children}</h1>
        </header>
    );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
