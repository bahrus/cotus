import {CongressProps, CongressActions} from '../types';
export class CotusCongressCore extends HTMLElement implements CongressActions{
    onInSession({inSession}: this){
        console.log(inSession);
    }
}

export interface CotusCongressCore extends CongressProps{}