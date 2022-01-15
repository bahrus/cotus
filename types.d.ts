
export interface CongressProps extends Status{
    senate: SenateProps;
    house: HouseProps;
}

export interface Status{
    inSession: boolean;
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

export interface SenateProps extends PartyAffiliation, Status{
    majorityLeader: string;
    minorityLeader: string;
    inSesson: boolean;
}

export interface SenateActions extends LegislativeBranchActions{
}

export interface HouseProps extends PartyAffiliation, Status{
    houseSpeaker: string;
    majorityWhip: string;
}

export interface HouseActions extends LegislativeBranchActions{
}