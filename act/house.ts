import {HouseActions, HouseProps} from '../types';
import {calculatePartyBreakdown} from './membersAnalysis.js';

export class House extends HTMLElement implements HouseActions{
    constructor(){
        super();
        this.loadActions();
    }
    async loadActions(){
        const {calculatePartyBreakdown} = await import('./membersAnalysis.js');
        this.calculatePartyBreakdown = calculatePartyBreakdown;
    }
    impeachPresident({}: this){
        this.noOfPresidentialImpeachments++;
    }
    
}

export interface House extends HouseProps{}