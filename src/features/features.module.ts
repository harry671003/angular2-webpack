import { NgModule } from '@angular/core';
import { F1Module } from './feature1/feature1.module';
import { F2Module } from './feature2/feature2.module';


@NgModule({
    exports: [
        F1Module,
        F2Module,
    ]
})
export class FModule { }