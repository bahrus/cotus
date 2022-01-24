export class House extends HTMLElement {
    constructor() {
        super();
        this.loadActions();
    }
    async loadActions() {
        const { calculateBreakdowns } = await import('./membersAnalysis.js');
        this.calculateBreakdowns = calculateBreakdowns;
    }
    impeachPresident({}) {
        this.noOfPresidentialImpeachments++;
    }
}
