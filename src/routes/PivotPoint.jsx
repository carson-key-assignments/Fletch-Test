// Packages
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import ConditionalRender from '../components/ConditionalRender';
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
import Navigation from '../ui/Navigation';
// Helpers
import { formatBytes } from '../helpers/misc';
import { encodeFilterHeader } from '../helpers/parseFilterHeader';

function PivotPoint() {
    const [metaData, metaDataDispatch] = useContext(MetaDataContext);
    const [isLoading, isLoadingDispatch] = useContext(IsLoadingContext);
    const [currentFilterType, setCurrentFilterType] = useState(null);
    const [currentFilterIp, setCurrentFilterIp] = useState(null);
    const [listTabletArray, setListTabletArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (metaData.filters.length > 0) {
            const filterArray = metaData.filters[metaData.filters.length - 1].split('-');
            setCurrentFilterType(filterArray[0]);
            setCurrentFilterIp(filterArray[1]);
        }
    }, [metaData.filters]);

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

    useEffect(() => {
        if (currentFilterIp && currentFilterType) {
            const tempArray = Object.keys(
                metaData.ipData[currentFilterIp][currentFilterType === 'd' ? 'destinations' : 'sources']
            );
            setListTabletArray(tempArray);
        }
    }, [metaData.ipData, currentFilterIp]);

    return (
        <Page>
            <Header>
                {currentFilterType === 'd' ? `Traffic To: ${currentFilterIp}` : `Traffic From: ${currentFilterIp}`}
            </Header>
            <Main>
                <ConditionalRender
                    condition={listTabletArray.length > 0}
                    falseReturn={
                        <div className="flex flex-col flex-grow justify-center">
                            <h2 className="text-bold text-2xl text-center">
                                There is no traffic {currentFilterType === 'd' ? `to` : `from`} this IP address
                            </h2>
                        </div>
                    }
                >
                    <ListTableHeader items={['IP Address', 'Bytes Transfered']} />
                    <ListTable className="flex-grow overflow-scroll">
                        {listTabletArray.map((ip) => (
                            <ListTableItem
                                key={ip}
                                items={[
                                    ip,
                                    `${formatBytes(
                                        metaData.ipData[currentFilterIp][
                                            currentFilterType === 'd' ? 'destinations' : 'sources'
                                        ][ip]
                                    ).toLocaleString()}`,
                                ]}
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
                </ConditionalRender>
                <Navigation />
            </Main>
        </Page>
    );
}

export default PivotPoint;
