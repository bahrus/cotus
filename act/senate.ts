import { SenateActions, SenateProps } from "../types";

export class Senate  extends HTMLElement implements SenateActions{
    constructor(){
        super();
        this.loadActions();
    }
    async loadActions(){
        const {calculateBreakdowns} = await import('./membersAnalysis.js');
        this.calculateBreakdowns = calculateBreakdowns;
    }    
}

export interface Senate extends SenateProps{}