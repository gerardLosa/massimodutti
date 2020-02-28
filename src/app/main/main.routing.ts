import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from 'src/app/main/ships/components/ships/ships.component';

const mainRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'Ships',
                component: ShipsComponent
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
