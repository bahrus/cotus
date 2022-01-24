import { SenateActions, SenateProps } from "../types";

export class Senate  extends HTMLElement implements SenateActions{
    constructor(){
        super();
        this.loadActions();
    }
    async loadActions(){
        const {calculatePartyBreakdown} = await import('./membersAnalysis.js');
        this.calculatePartyBreakdown = calculatePartyBreakdown;
    }    
}

export interface Senate extends SenateProps{}