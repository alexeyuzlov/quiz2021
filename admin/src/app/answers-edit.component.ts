import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AnswerEdit, newAnswerEdit } from './question';

@Component({
    selector: 'app-answers-edit',
    templateUrl: './answers-edit.component.html',
})
export class AnswersEditComponent {
    @Input() public control: FormArray;

    @Input()
    set answers(data: AnswerEdit[]) {
        if (!Array.isArray(data)) {
            return;
        }

        this._removeAll();
        data.forEach((item: AnswerEdit) => this.add(item));
    }

    constructor(
        private _fb: FormBuilder
    ) {
    }

    public add(item: AnswerEdit = newAnswerEdit()) {
        this.control.push(
            this._fb.group({
                answer: [item.answer],
                correct: [item.correct]
            }),
        )
    }

    public remove(i: number) {
        this.control.removeAt(i);
    }

    private _removeAll() {
        while (this.control.length !== 0) {
            this.control.removeAt(0);
        }
    }
}
