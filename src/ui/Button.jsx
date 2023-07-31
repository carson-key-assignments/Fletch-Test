// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    children: <></>,
    className: '',
    onClick: () => {},
};

function Button({ children, className, onClick }) {
    return (
        <button
            className={`w-fit text-white bg-blue-600 hover:bg-blue-800 rounded-3xl py-2 px-2 ${className}`}
            type="button"
            onClick={() => {
                onClick();
            }}
        >
            {children}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
