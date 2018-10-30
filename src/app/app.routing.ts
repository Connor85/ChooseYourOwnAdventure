import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PikePlaceComponent } from './pike-place/pike-place.component';

const appRoutes: Routes = [
    {
        path:'',
        component: StartComponent
    },
    {
        path:'pikeplace',
        component: PikePlaceComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);