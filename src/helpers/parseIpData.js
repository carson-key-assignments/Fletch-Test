export const parseUniqueIpsAndTotalBytes = (tempIpData, ip) => {
    const currentDestValue = tempIpData?.[ip.result['All_Traffic.dest']]
        ? tempIpData[ip.result['All_Traffic.dest']]
        : 0;
    const currentSrcValue = tempIpData?.[ip.result['All_Traffic.src']] ? tempIpData[ip.result['All_Traffic.src']] : 0;

    return {
        uniqueDest: currentDestValue + Number(ip.result.sum_bytes),
        uniqueSrc: currentSrcValue + Number(ip.result.sum_bytes),
    };
};
export const parseDestSrcIpData = (tempIpData, ip) => {
    const currentDestValue = tempIpData?.[ip.result['All_Traffic.dest']]?.sources?.[ip.result['All_Traffic.src']]
        ? tempIpData[ip.result['All_Traffic.dest']].sources[ip.result['All_Traffic.src']]
        : 0;
    const currentSrcValue = tempIpData?.[ip.result['All_Traffic.src']]?.destinations?.[ip.result['All_Traffic.dest']]
        ? tempIpData[ip.result['All_Traffic.src']].sources[ip.result['All_Traffic.dest']]
        : 0;

    return {
        ipDestBytes: currentDestValue + Number(ip.result.sum_bytes),
        ipSrcBytes: currentSrcValue + Number(ip.result.sum_bytes),
    };
};

export const parseIpData = (ipData) => {
    const tempUniqueIpData = {};
    const tempIpData = {};

    ipData.forEach((ip) => {
        const { uniqueSrc, uniqueDest } = parseUniqueIpsAndTotalBytes(tempUniqueIpData, ip);
        const { ipSrcBytes, ipDestBytes } = parseDestSrcIpData(tempIpData, ip);

        tempUniqueIpData[ip.result['All_Traffic.dest']] = uniqueDest;
        tempUniqueIpData[ip.result['All_Traffic.src']] = uniqueSrc;

        if (!tempIpData[ip.result['All_Traffic.dest']]) {
            tempIpData[ip.result['All_Traffic.dest']] = {
                sources: {},
                destinations: {},
            };
        }
        if (!tempIpData[ip.result['All_Traffic.src']]) {
            tempIpData[ip.result['All_Traffic.src']] = {
                sources: {},
                destinations: {},
            };
        }

        tempIpData[ip.result['All_Traffic.dest']].sources[ip.result['All_Traffic.src']] = ipDestBytes;
        tempIpData[ip.result['All_Traffic.src']].destinations[ip.result['All_Traffic.dest']] = ipSrcBytes;
    });

    return { tempUniqueIpData, tempIpData };
};

export default parseUniqueIpsAndTotalBytes;
