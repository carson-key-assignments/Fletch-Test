// Packages
import React from 'react';
import PropTypes from 'prop-types';
// UI
import Button from './Button';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func]))),
    outerDivClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
};
const defaultProps = {
    items: [],
    outerDivClassName: '',
    buttonClassName: '',
};

function ContextMenu({ outerDivClassName, items, buttonClassName }) {
    return (
        <div className={`flex justify-center gap-2 mt-2 ${outerDivClassName}`}>
            {items.map((item) => (
                <Button key={item.jsx} className={`w-1/2 ${buttonClassName}`} onClick={item.onClick}>
                    {item.jsx}
                </Button>
            ))}
        </div>
    );
}

ContextMenu.propTypes = propTypes;
ContextMenu.defaultProps = defaultProps;

export default ContextMenu;
