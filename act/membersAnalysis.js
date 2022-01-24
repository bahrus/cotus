export const calculatePartyBreakdown = ({ members }) => {
    const acc = {
        noOfRepublicans: 0,
        noOfDemocrats: 0,
        noOfIndependents: 0,
    };
    for (const member of members) {
        switch (member.party) {
            case 'R':
                acc.noOfRepublicans++;
                break;
            case 'D':
                acc.noOfDemocrats++;
                break;
            default:
                acc.noOfIndependents++;
        }
    }
    return acc;
};
