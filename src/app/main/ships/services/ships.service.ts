import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ShipsService {
    constructor(private httpClient: HttpClient) { }


    public getShips(url?: string): Observable<any> {
        if (!url) {
            url = 'https://swapi.co/api/starships/';
        }
        return this.httpClient.get<any>(url)
            .pipe(
                map(
                    res => res
                ),
                catchError(
                    error => {
                        console.log('Http Error: ', error);
                        return of(null);
                    }
                )
            );
    }

}
