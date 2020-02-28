import { NgModule } from '@angular/core';
import { MainRoutingModule } from 'src/app/main/main.routing';
import { ShipsComponent } from './ships/components/ships/ships.component';


@NgModule({
    declarations: [
        ShipsComponent
    ],
    imports: [
        MainRoutingModule
    ]
})
export class MainModule { }
