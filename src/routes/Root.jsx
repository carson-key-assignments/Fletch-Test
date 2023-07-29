// Packages
import React, { useContext } from 'react';
// Contexts
import { MetaDataContext } from '../contexts/MetaData';
// UI
import Header from '../ui/Header';
import ListTable from '../ui/ListTable';
import ListTableItem from '../ui/ListTableItem';
import Main from '../ui/Main';
import Page from '../ui/Page';

function Root() {
    const metaData = useContext(MetaDataContext)[0];

    return (
        <Page>
            <Header>IP Addresses</Header>
            <Main>
                <ListTable>
                    {metaData.ipData.map((ipData) => (
                        <ListTableItem
                            key={`${ipData.result['All_Traffic.src']}-${ipData.result['All_Traffic.dest']}-${ipData.result.sum_bytes}`}
                            items={[ipData.result['All_Traffic.src']]}
                        />
                    ))}
                </ListTable>
            </Main>
        </Page>
    );
}

export default Root;
