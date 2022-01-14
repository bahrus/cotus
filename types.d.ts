
export interface LegislativeBranchProps{
    senate: SenateProps;
    house: House;
}

export interface LegislativeBranchActions{
    passBill: (self: this) => void;
    overrideVeto: (self: this) => void;
}

export interface SenateProps{
    noOfRepublicans: number;
    noOfDemocrats: number;
    noOfIndependents: number;
    majorityLeader: string;
    minorityLeader: string;
    inSession: boolean;
}

export interface SenateActions extends LegislativeBranchActions{
}

export interface House{
    noOfRepublicans: number;
    noOfDemocrats: number;
    noOfIndependents: number;
    houseSpeaker: string;
    majorityWhip: string;
    inSession: boolean;
}