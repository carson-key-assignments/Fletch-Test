// Packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// UI
import ConditionalRender from '../components/ConditionalRender';
import ContextMenu from './ContextMenu';

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    contextMenuItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func]))),
    liClassName: PropTypes.string,
    pClassName: PropTypes.string,
    innerDivClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    closeOtherMenus: PropTypes.number,
    setCloseOtherMenus: PropTypes.func,
};
const defaultProps = {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    items: <></>,
    contextMenuItems: null,
    liClassName: '',
    pClassName: '',
    innerDivClassName: '',
    buttonClassName: '',
    closeOtherMenus: 0,
    setCloseOtherMenus: () => {},
};

function ListTableItem({
    items,
    liClassName,
    pClassName,
    innerDivClassName,
    buttonClassName,
    contextMenuItems,
    closeOtherMenus,
    setCloseOtherMenus,
}) {
    const [openContextMenu, setOpenContextMenu] = useState(false);
    const [keepContextMenuOpenAt, setKeepContextMenuOpenAt] = useState(0);

    useEffect(() => {
        if (closeOtherMenus !== keepContextMenuOpenAt) {
            setOpenContextMenu(false);
        }
    }, [closeOtherMenus]);

    return (
        <li className={`w-full h-mi2-16 px-2 py-2 ${liClassName}`}>
            <button
                disabled={!contextMenuItems}
                type="button"
                onClick={() => {
                    setKeepContextMenuOpenAt(closeOtherMenus + 1);
                    setCloseOtherMenus();
                    setOpenContextMenu((prev) => !prev);
                }}
                className={`flex w-full h-full justify-center divide-x-2 ${buttonClassName}`}
            >
                {items.map((item) => (
                    <div
                        key={item}
                        className={`flex flex-col justify-center w-1/2 h-12 my-auto text-lg font-semibold text-stone-700 ${pClassName}`}
                    >
                        <p className={`w-fit mx-auto ${innerDivClassName}`}>{item}</p>
                    </div>
                ))}
            </button>
            <ConditionalRender condition={openContextMenu && contextMenuItems !== null}>
                <ContextMenu items={contextMenuItems} />
            </ConditionalRender>
        </li>
    );
}

ListTableItem.propTypes = propTypes;
ListTableItem.defaultProps = defaultProps;

export default ListTableItem;
