// Packages
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    h2ClassName: PropTypes.string,
    outerDivClassName: PropTypes.string,
    innerDivClassName: PropTypes.string,
};
const defaultProps = {
    items: [],
    h2ClassName: '',
    outerDivClassName: '',
    innerDivClassName: '',
};

function ListTableHeader({ items, h2ClassName, outerDivClassName, innerDivClassName }) {
    return (
        <div
            className={`flex justify-center divide-x-2 divide-white bg-black w-full h-fit px-2 py-2 ${outerDivClassName}`}
        >
            {items.map((item) => (
                <div
                    key={item}
                    className={`flex flex-col justify-center w-1/${items.length} h-fit my-auto text-md font-semibold text-white ${h2ClassName}`}
                >
                    <div className={`w-fit mx-auto ${innerDivClassName}`}>{item}</div>
                </div>
            ))}
        </div>
    );
}

ListTableHeader.propTypes = propTypes;
ListTableHeader.defaultProps = defaultProps;

export default ListTableHeader;
