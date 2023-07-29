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

function ListTable({ children, className }) {
    return <ul className={`w-full h-fit divide-y-2 px-6 ${className}`}>{children}</ul>;
}

ListTable.propTypes = propTypes;
ListTable.defaultProps = defaultProps;

export default ListTable;
