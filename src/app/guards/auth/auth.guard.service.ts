import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    public canActivate(): boolean {
        if (!this.authenticationService.getAccess()) {
            this.router.navigate(['/Login']);
        }
        return true;
    }
}
