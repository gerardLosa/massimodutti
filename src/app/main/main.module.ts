import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from 'src/app/main/main.routing';
import { ShipsComponent } from './ships/components/ships/ships.component';
import { ShipsListPageComponent } from './ships/pages/ships-list-page/ships-list-page.component';


@NgModule({
    declarations: [
        ShipsComponent,
        ShipsListPageComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule
    ]
})
export class MainModule { }
