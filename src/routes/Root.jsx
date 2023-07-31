// Packages
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
import { IsLoadingContext } from '../contexts/IsLoading';
// UI
import Header from '../ui/Header';
import ListTable from '../ui/ListTable';
import ListTableHeader from '../ui/ListTableHeader';
import ListTableItem from '../ui/ListTableItem';
import Main from '../ui/Main';
import Page from '../ui/Page';
// Helpers
import { formatBytes } from '../helpers/misc';
import { encodeFilterHeader } from '../helpers/parseFilterHeader';

function Root() {
    const [closeOtherMenus, setCloseOtherMenus] = useState(0);
    const [metaData, metaDataDispatch] = useContext(MetaDataContext);
    const [isLoading, isLoadingDispatch] = useContext(IsLoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading.loadingBlockerOverlay.addFilter) {
            const encodedFilters = encodeFilterHeader(JSON.stringify(metaData.filters));

            isLoadingDispatch({
                type: 'REMOVE_OVERLAY_BLOCKER',
                payload: 'addFilter',
            });

            navigate(`/pivot/${encodedFilters}`);
        }
    }, [metaData.filters]);

    return (
        <Page>
            <Header>IP Addresses</Header>
            <Main>
                <ListTableHeader items={['IP Address', 'Total Bytes']} />
                <ListTable className="flex-grow overflow-scroll">
                    {Object.keys(metaData.ipAddressesAndTotalBytes).map((ip) => (
                        <ListTableItem
                            closeOtherMenus={closeOtherMenus}
                            setCloseOtherMenus={() => {
                                setCloseOtherMenus((prev) => prev + 1);
                            }}
                            key={`${ip}-${metaData.ipAddressesAndTotalBytes[ip]}`}
                            items={[ip, `${formatBytes(metaData.ipAddressesAndTotalBytes[ip]).toLocaleString()}`]}
                            contextMenuItems={[
                                {
                                    onClick: () => {
                                        isLoadingDispatch({
                                            type: 'ADD_OVERLAY_BLOCKER',
                                            payload: 'addFilter',
                                        });
                                        metaDataDispatch({
                                            type: 'ADD_DEST_FILTER',
                                            payload: ip,
                                        });
                                    },
                                    jsx: 'Find Traffic To',
                                },
                                {
                                    onClick: () => {
                                        isLoadingDispatch({
                                            type: 'ADD_OVERLAY_BLOCKER',
                                            payload: 'addFilter',
                                        });
                                        metaDataDispatch({
                                            type: 'ADD_SRC_FILTER',
                                            payload: ip,
                                        });
                                    },
                                    jsx: 'Find Traffic From',
                                },
                            ]}
                        />
                    ))}
                </ListTable>
            </Main>
        </Page>
    );
}

export default Root;
