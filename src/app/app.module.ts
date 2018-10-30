import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PikePlaceComponent } from './pike-place/pike-place.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PikePlaceComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
