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
    termNumber: number;
}

export interface LegislativeBranchActions{
    // passBill: (self: this) => void;
    // overrideVeto: (self: this) => void;
}

export interface CongressActions extends LegislativeBranchActions{
    onInSession(self: this): void;
}

export interface CongressPersonProps{
    id: string,
    title: string,
    short_title: string,
    api_uri: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    suffix: string,
    date_of_birth: string,
    gender: string,
    party: string,
    leadership_role: string,
    twitter_account: string,
    facebook_account: string,
    youtube_account: string,
    govtrack_id: string,
    cspan_id: string,
    votesmart_id: string,
    icpsr_id: string,
    crp_id: string,
    google_entity_id: string,
    fec_candidate_id: string,
    url: string,
    rss_url: string,
    contact_form: string,
    in_office: boolean,
    cook_pvi: string,
    dw_nominate: number,
    ideal_point: string,
    seniority: number,
    next_election: string,
    total_votes: number,
    missed_votes: number,
    total_present: number,
    last_updated: string,
    ocd_id: string,
    office: string,
    phone: string,
    fax: string,
    state: string,
    senate_class: string,
    state_rank: string,
    lis_id: string,
    missed_votes_pct: number,
    votes_with_party_pct: number,
    votes_against_party_pct: number,
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
    members: CongressPersonProps[];
}

export interface SenateActions extends LegislativeBranchActions{
    
}

export interface HouseProps extends PartyAffiliation, Status{
    houseSpeaker: string;
    majorityWhip: string;
    noOfPresidentialImpeachments: number;
    
    members: CongressPersonProps[];
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
    name: string;
    party: string;
}

export interface CabinetProps{
}