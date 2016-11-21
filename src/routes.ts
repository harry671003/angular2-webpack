import {F1Component} from './features/feature1/feature1.component';
import {F2Component} from './features/feature2/feature2.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
    { path: 'f1', component: F1Component },
    { path: 'f2', component: F2Component },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
