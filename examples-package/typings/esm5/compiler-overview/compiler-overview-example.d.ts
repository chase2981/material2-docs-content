import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
export declare class State {
    name: string;
    population: string;
    flag: string;
    constructor(name: string, population: string, flag: string);
}
/**
 * @title compiler overview
 */
export declare class CompilerOverviewExample {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;
    states: State[];
    constructor();
    filterStates(name: string): State[];
}
