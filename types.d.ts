export interface UnionProps {
    congress: CongressProps & CongressActions;
    executive: ExecutiveProps & ExecutiveActions;
}

export interface UnionActions {
}

export interface CongressProps extends Status{
    senate: SenateProps & SenateActions;
    house: HouseProps & SenateActions;
}

export interface Status{
    inSession: boolean;
}

export interface LegislativeBranchActions{
    // passBill: (self: this) => void;
    // overrideVeto: (self: this) => void;
}

export interface CongressActions extends LegislativeBranchActions{
    onInSession(self: this): void;
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
    impeachPresident(self: this): void;
}

export interface ExecutiveProps{
    president: PresidentProps;
    vicePresident: VicePresidentProps;
}

export interface ExecutiveActions{

}

export interface PresidentProps{
    name: string;
    party: string;
    impeachmentCount: number;
}

export interface VicePresidentProps{

}

export interface CabinetProps{
}