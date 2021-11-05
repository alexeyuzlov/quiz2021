import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
})
export class QuestionEditComponent implements OnInit {
  public form: FormGroup;

  public id: number;

  get answers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _http: HttpClient,
  ) {
  }

  public ngOnInit() {
    this.form = this._fb.group({
      question: [''],
      answers: this._fb.array([])
    });

    this._route.paramMap.subscribe(
      (param: ParamMap) => {
        this.id = +param.get('id');
        if (this.id) {
          // edit mode
          this._http.get('http://localhost:3000/questions/' + this.id).subscribe(
            (question: any) => {
              const prepared = {
                question: question.question,
                answers: question.answers.map((answer, index) => {
                  let newAnswer = {
                    answer,
                    correct: question.correct.includes(index)
                  }

                  this.addAnswer();

                  return newAnswer;
                })
              }

              this.form.patchValue(prepared);
            }
          );
        }
      }
    )
  }

  public addAnswer() {
    this.answers.push(
      this._fb.group({
        answer: [''],
        correct: [false]
      }),
    )
  }

  public removeAnswer(i: number) {
    this.answers.removeAt(i);
  }

  public submit() {
    const body = this.form.value;

    const preparedBody = {
      question: body.question,
      answers: body.answers.map((answerGroup) => answerGroup.answer),
      correct: body.answers
        .map((answerGroup, index) => ({index, correct: answerGroup.correct}))
        .filter(({index, correct}) => correct)
        .map((data) => data.index),
    }

    const editFn = this._http.put('http://localhost:3000/questions/' + this.id, preparedBody);
    const createFn = this._http.post('http://localhost:3000/questions', preparedBody);

    console.info(preparedBody);
    if (this.id) {
      editFn.subscribe(() => console.info('edited'))
    } else {
      createFn.subscribe(() => console.info('created'))
    }
  }
}
