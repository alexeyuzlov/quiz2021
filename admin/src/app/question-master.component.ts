import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-question-master',
    templateUrl: './question-master.component.html',
})
export class QuestionMasterComponent implements OnInit {
    public loading: boolean = false;

    public questions: Question[] = [];

    constructor(
        private _questionService: QuestionService,
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.loading = true;
        this._questionService.getAll().pipe(
            finalize(() => this.loading = false)
        ).subscribe(
            (data) => this.questions = data
        );
    }

    remove(id: number) {
        this.loading = true;
        this._questionService.remove(id).pipe(
            finalize(() => this.loading = false)
        ).subscribe(
            () => {
                this.questions = this.questions.filter((q) => q.id !== id);
            },
        );
    }
}

