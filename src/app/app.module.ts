import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { AppComponent }   from './app.component';
import { FModule } from '../features/features.module';
import {routing} from '../routes';

@NgModule({
    imports:      [ 
        BrowserModule,
        routing,
        FModule,
    ],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }