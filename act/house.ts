import {HouseActions, HouseProps} from '../types';

export class House extends HTMLElement implements HouseActions{
    impeachPresident({}: this){
        console.log('impeach president');
    }
}