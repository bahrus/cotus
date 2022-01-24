import {LegislativeBranchProps, PartyBreakdown, GenderBreakdown} from '../types';
export const calculateBreakdowns = ({members}: LegislativeBranchProps) =>{
    const acc: PartyBreakdown & GenderBreakdown= {
        noOfRepublicans: 0,
        noOfDemocrats: 0,
        noOfIndependents: 0,
        noOfMen: 0,
        noOfWomen: 0,
        noOfOther: 0,
    }
    for(const member of members){
        switch(member.party){
            case 'R':
                acc.noOfRepublicans++;
                break;
            case 'D':
                acc.noOfDemocrats++;
                break;
            default:
                acc.noOfIndependents++;

        }
        switch(member.gender){
            case 'M':
                acc.noOfMen++;
                break;
            case 'F':
                acc.noOfWomen++;
                break;
        }
    }
    return acc;
}