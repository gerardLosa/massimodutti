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
        },
        {
            userName: 'gerard2',
            password: 'passTest2'
        }
    ]; // It simulates a users list taked from a Database

    public getByUserName(userName: string): Observable<any> {
        return of(this.usersBDD.find(user => user.name = userName));
    }

    public addUser(userName: string, password: string): void {

        this.usersBDD.push(
            {
                userName,
                password
            }
        );
    }
}
