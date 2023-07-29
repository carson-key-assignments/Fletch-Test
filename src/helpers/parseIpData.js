export const parseUniqueIpsAndTotalBytes = (ipData) => {
    const tempIpData = {};

    ipData.forEach((ip) => {
        const currentDestValue = tempIpData?.[ip.result['All_Traffic.dest']]
            ? tempIpData[ip.result['All_Traffic.dest']]
            : 0;
        const currentSrcValue = tempIpData?.[ip.result['All_Traffic.src']]
            ? tempIpData[ip.result['All_Traffic.src']]
            : 0;

        tempIpData[ip.result['All_Traffic.dest']] = currentDestValue + Number(ip.result.sum_bytes);
        tempIpData[ip.result['All_Traffic.src']] = currentSrcValue + Number(ip.result.sum_bytes);
    });

    return tempIpData;
};

export default parseUniqueIpsAndTotalBytes;
