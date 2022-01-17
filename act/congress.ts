import {CongressProps, CongressActions} from '../types';

export class Congress extends HTMLElement implements CongressActions{
    onInSession({inSession}: this){
        console.log(inSession);
    }
}

export interface Congress extends CongressProps{}