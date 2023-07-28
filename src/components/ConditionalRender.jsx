// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    falseReturn: PropTypes.node,
    condition: PropTypes.oneOfType([PropTypes.node, PropTypes.bool, PropTypes.object]),
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    children: <></>,
    // eslint-disable-next-line react/jsx-no-useless-fragment
    falseReturn: <></>,
    condition: true,
};

function ConditionalRender(props) {
    const { condition, children, falseReturn } = props;

    if (condition) {
        return children;
    }

    return falseReturn;
}

ConditionalRender.propTypes = propTypes;
ConditionalRender.defaultProps = defaultProps;

export default ConditionalRender;
