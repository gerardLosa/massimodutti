import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    private usersBDD: Array<any> = [
        {
            userName: 'gerard1',
            password: 'passTest1'
        }
    ]; // It simulates a users list taked from a Database

    public getUserByName(userName: string): Observable<any> {
        return of(this.usersBDD.find(user => user.userName === userName));
    }

    public addUser(userName: string, password: string): void {

        if (!this.usersBDD.some(user => user.userName === userName)) {
            this.usersBDD.push(
                {
                    userName,
                    password
                }
            );
        }
    }
}
