import {HouseActions, HouseProps} from '../types';

export class House extends HTMLElement implements HouseActions{
    constructor(){
        super();
        this.loadActions();
    }
    async loadActions(){
        const {calculateBreakdowns} = await import('./membersAnalysis.js');
        this.calculateBreakdowns = calculateBreakdowns;
    }
    impeachPresident({}: this){
        this.noOfPresidentialImpeachments++;
    }
    
}

export interface House extends HouseProps{}