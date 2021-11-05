import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';

@Component({
    selector: 'app-question-master',
    templateUrl: './question-master.component.html',
})
export class QuestionMasterComponent implements OnInit {
    public loading: boolean = false;

    public questions: Question[] = [];

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.loading = true;
        this.http.get<Question[]>('http://localhost:3000/questions').subscribe(
            (data) => {
                this.questions = data;
                this.loading = false;
            },
        );
    }

    remove(id: number) {
        this.loading = true;

        console.info(1);
        this.http.delete('http://localhost:3000/questions/' + id).subscribe(
            (data) => {
                this.questions = this.questions.filter((q) => q.id !== id);
                this.loading = false;
                console.info(3);
            },
            ()=> console.info(4)
        );
        console.info(2);
    }
}

