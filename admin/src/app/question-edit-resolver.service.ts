import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Question, QuestionEdit, toQuestionEdit } from './question';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class QuestionEditResolver implements Resolve<QuestionEdit> {
    constructor(
        private _questionService: QuestionService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<QuestionEdit> {
        const id: number = +route.paramMap.get('id');
        return this._questionService.get(id).pipe(
            map((question: Question) => toQuestionEdit(question))
        );
    }
}
