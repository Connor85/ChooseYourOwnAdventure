import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PikePlaceComponent } from './pike-place/pike-place.component';
import { PostAlleyComponent } from './post-alley/post-alley.component';
import { MarketComponent } from './market/market.component';
import { PinkDoorComponent } from './pink-door/pink-door.component';
import { GumWallComponent } from './gum-wall/gum-wall.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PikePlaceComponent,
    PostAlleyComponent,
    MarketComponent,
    PinkDoorComponent,
    GumWallComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
