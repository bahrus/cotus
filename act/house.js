export class House extends HTMLElement {
    constructor() {
        super();
        this.loadActions();
    }
    async loadActions() {
        const { calculatePartyBreakdown } = await import('./membersAnalysis.js');
        this.calculatePartyBreakdown = calculatePartyBreakdown;
    }
    impeachPresident({}) {
        this.noOfPresidentialImpeachments++;
    }
}
