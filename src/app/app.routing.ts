import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: 'Login',
    loadChildren: (): Promise<LoginModule> => import('./login/login.module').then(m => m.LoginModule),
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
