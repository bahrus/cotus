
export interface CongressProps{
    senate: SenateProps;
    house: HouseProps;
}

export interface LegislativeBranchActions{
    passBill: (self: this) => void;
    overrideVeto: (self: this) => void;
}

export interface CongressActions extends LegislativeBranchActions{
}

export interface PartyAffiliation{
    noOfRepublicans: number;
    noOfDemocrats: number;
    noOfIndependents: number;
}

export interface SenateProps extends PartyAffiliation{
    majorityLeader: string;
    minorityLeader: string;
    inSession: boolean;
}

export interface SenateActions extends LegislativeBranchActions{
}

export interface HouseProps extends PartyAffiliation{
    houseSpeaker: string;
    majorityWhip: string;
    inSession: boolean;
}

export interface HouseActions extends LegislativeBranchActions{
}