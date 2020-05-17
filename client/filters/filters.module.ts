import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimePipe } from './time/time.filter';


@NgModule({
    imports: [
    	CommonModule
    ],
    declarations: [
        TimePipe

    ],
    exports: [
        TimePipe
    ]
})
export class FiltersModule {}
