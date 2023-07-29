// Packages
import React, { useContext } from 'react';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
// UI
import Header from '../ui/Header';
import ListTable from '../ui/ListTable';
import ListTableHeader from '../ui/ListTableHeader';
import ListTableItem from '../ui/ListTableItem';
import Main from '../ui/Main';
import Page from '../ui/Page';
// Helpers
import { formatBytes } from '../helpers/misc';

function Root() {
    const metaData = useContext(MetaDataContext)[0];

    return (
        <Page>
            <Header>IP Addresses</Header>
            <Main>
                <ListTableHeader items={['IP Address', 'Total Bytes']} />
                <ListTable>
                    {Object.keys(metaData.ipAddressesAndTotalBytes).map((ip) => (
                        <ListTableItem
                            key={`${ip}-${metaData.ipAddressesAndTotalBytes[ip]}`}
                            items={[ip, `${formatBytes(metaData.ipAddressesAndTotalBytes[ip]).toLocaleString()}`]}
                        />
                    ))}
                </ListTable>
            </Main>
        </Page>
    );
}

export default Root;
