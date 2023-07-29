// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    liClassName: PropTypes.string,
    pClassName: PropTypes.string,
    innerDivClassName: PropTypes.string,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    items: <></>,
    liClassName: '',
    pClassName: '',
    innerDivClassName: '',
};

function ListTableItem({ items, liClassName, pClassName, innerDivClassName }) {
    return (
        <li className={`flex justify-center divide-x-2 w-full h-16 px-2 py-2 ${liClassName}`}>
            {items.map((item) => (
                <div
                    key={item}
                    className={`flex flex-col justify-center w-1/${items.length} h-12 my-auto text-lg font-semibold text-stone-700 ${pClassName}`}
                >
                    <p className={`w-fit mx-auto ${innerDivClassName}`}>{item}</p>
                </div>
            ))}
        </li>
    );
}

ListTableItem.propTypes = propTypes;
ListTableItem.defaultProps = defaultProps;

export default ListTableItem;
