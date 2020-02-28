import { Injectable, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/main/users/services/users.service';
import { Base64 } from 'src/app/utils/base64-encoder';

@AutoUnsubscribe()
@Injectable({
    providedIn: 'root'
})

export class AuthenticationService implements OnDestroy {

    constructor(private userService: UsersService) {

    }
    public login(userName, password): Observable<any> {

        let response;
        return this.userService.getUserByName(userName)
            .pipe(
                map(
                    user => {
                        if (user && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: false, message: 'UserName or password is incorrect' };
                        }
                        return response;
                    })
            );
    }

    public setCredentials(userName, password) {
        const authdata = Base64.encode(userName + ':' + password);

        const globals = {
            currentUser: {
                userName,
                authdata
            }
        };
    }

    public ngOnDestroy(): void { }
}
