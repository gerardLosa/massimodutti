import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/userForms/components.module';
import { RegisterComponent } from 'src/app/register/register.component';
import { RegisterRoutingModule } from 'src/app/register/register.routing';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        ReactiveFormsModule,
        ComponentsModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }
