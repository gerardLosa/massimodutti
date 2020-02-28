import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsListPageComponent } from 'src/app/main/ships/pages/ships-list-page/ships-list-page.component';

const mainRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'Ships',
                component: ShipsListPageComponent
            },
            { path: '', redirectTo: 'Ships', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            mainRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
