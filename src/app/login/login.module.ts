import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule
    ]
})
export class LoginModule { }
