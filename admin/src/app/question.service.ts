import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    get api() {
        return 'http://localhost:3000/questions/';
    }

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll() {
        return this._http.get<Question[]>(this.api);
    }

    public get(id: number): Observable<Question> {
        return this._http.get<Question>(this.api + id);
    }

    public create(question) {
        return this._http.get(this.api, question);
    }

    public update(id, question) {
        return this._http.get(this.api + id, question);
    }

    public remove(id: number) {
        return this._http.delete(this.api + id)
    }
}
