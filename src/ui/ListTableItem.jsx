// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    liClassName: PropTypes.string,
    pClassName: PropTypes.string,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    items: <></>,
    liClassName: '',
    pClassName: '',
};

function ListTableItem({ items, liClassName, pClassName }) {
    return (
        <li className={`w-full h-16 px-6 py-4 ${liClassName}`}>
            {items.map((item) => (
                <p key={item} className={`w-fit h-fit mx-auto text-xl font-semibold text-stone-700 ${pClassName}`}>
                    {item}
                </p>
            ))}
        </li>
    );
}

ListTableItem.propTypes = propTypes;
ListTableItem.defaultProps = defaultProps;

export default ListTableItem;
