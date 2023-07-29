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

export const parseIpData = (ipData) => {
    const tempUniqueIpData = {};

    ipData.forEach((ip) => {
        const { uniqueSrc, uniqueDest } = parseUniqueIpsAndTotalBytes(tempUniqueIpData, ip);

        tempUniqueIpData[ip.result['All_Traffic.dest']] = uniqueSrc;
        tempUniqueIpData[ip.result['All_Traffic.src']] = uniqueDest;
    });

    return { tempUniqueIpData };
};

export default parseUniqueIpsAndTotalBytes;
