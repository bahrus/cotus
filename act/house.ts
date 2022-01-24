import {HouseActions, HouseProps} from '../types';

export class House extends HTMLElement implements HouseActions{
    impeachPresident({}: this){
        this.noOfPresidentialImpeachments++;
    }
    calculatePartyBreakdown({members}: this){
        const acc: Partial<House> = {
            noOfRepublicans: 0,
            noOfDemocrats: 0,
            noOfIndependents: 0,
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
        }
        return acc;
    }
}

export interface House extends HouseProps{}