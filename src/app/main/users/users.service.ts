import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    getByUsername(username: string): Observable<any> {
        const users: Array<any> = [
            {
                name: 'gerard1',
                password: 'passTest1'
            },
            {
                name: 'gerard2',
                password: 'passTest2'
            }
        ];
        return of(users.find(user => user.name = username));
    }

}
