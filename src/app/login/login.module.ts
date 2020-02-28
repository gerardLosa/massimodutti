import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginRoutingModule } from 'src/app/login/login.routing';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
