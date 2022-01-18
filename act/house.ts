import {HouseActions, HouseProps} from '../types';

export class House extends HTMLElement implements HouseActions{
    impeachPresident({}: this){
        this.noOfPresidentialImpeachments++;
    }
}

export interface House extends HouseProps{}