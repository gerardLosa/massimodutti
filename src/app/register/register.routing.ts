import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';


const appRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class RegisterRoutingModule { }
