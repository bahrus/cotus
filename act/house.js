import { calculatePartyBreakdown } from './membersAnalysis.js';
export class House extends HTMLElement {
    impeachPresident({}) {
        this.noOfPresidentialImpeachments++;
    }
    calculatePartyBreakdown = calculatePartyBreakdown;
}
