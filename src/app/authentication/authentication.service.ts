import { Injectable } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from 'src/app/main/users/users.service';
import { Base64 } from 'src/app/utils/base64-encoder';

@AutoUnsubscribe()
@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(private userService: UsersService) {

    }
    public login(username, password): Observable<any> {

        let response;
        return this.userService.getByUsername(username)
            .pipe(
                map(
                    user => {
                        if (user !== null && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: false, message: 'Username or password is incorrect' };
                        }
                        return response;
                    })
            );
    }

    public setCredentials(username, password) {
        const authdata = Base64.encode(username + ':' + password);

        const globals = {
            currentUser: {
                username,
                authdata
            }
        };
    }

    public onDestroy(): void { }
}
