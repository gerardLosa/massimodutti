import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataFormComponent } from 'src/app/components/userForms/user-data-form/user-data-form.component';


@NgModule({
    declarations: [
        UserDataFormComponent
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        UserDataFormComponent
    ]
})
export class ComponentsModule { }
