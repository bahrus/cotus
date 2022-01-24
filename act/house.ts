import {HouseActions, HouseProps} from '../types';
import {calculatePartyBreakdown} from './membersAnalysis.js';

export class House extends HTMLElement implements HouseActions{

    impeachPresident({}: this){
        this.noOfPresidentialImpeachments++;
    }
    calculatePartyBreakdown = calculatePartyBreakdown;
}

export interface House extends HouseProps{}