import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth/auth.guard.service';
import { LoginModule } from 'src/app/login/login.module';
import { MainModule } from 'src/app/main/main.module';
import { RegisterModule } from 'src/app/register/register.module';


const appRoutes: Routes = [
  {
    path: 'Login',
    loadChildren: (): Promise<LoginModule> => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'Register',
    loadChildren: (): Promise<RegisterModule> => import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'Main',
    canActivate: [AuthGuardService],
    loadChildren: (): Promise<MainModule> => import('./main/main.module').then(m => m.MainModule),
  },
  { path: '', redirectTo: 'Login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
