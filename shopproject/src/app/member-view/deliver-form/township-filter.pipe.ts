import { Township, Division } from './../../model/division';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'townshipFilter'})
export class TownshipFilterPipe implements PipeTransform{
    transform(value: Township[], division:Division) {
        if(!division) return value;
        return value?.filter(township => township.division.id === division.id);
    }

}