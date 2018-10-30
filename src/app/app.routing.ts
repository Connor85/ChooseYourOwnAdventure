import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PikePlaceComponent } from './pike-place/pike-place.component';
import { PostAlleyComponent } from './post-alley/post-alley.component';
import { MarketComponent } from './market/market.component';
import { PinkDoorComponent } from './pink-door/pink-door.component';
import { GumWallComponent } from './gum-wall/gum-wall.component';

const appRoutes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'pikeplace',
        component: PikePlaceComponent
    },
    {
        path: 'postalley',
        component: PostAlleyComponent
    },
    {
        path: 'market',
        component: MarketComponent
    },
    {
        path: 'gumwall',
        component: GumWallComponent
    },
    {
    path: 'pinkdoor',
    component: PinkDoorComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);