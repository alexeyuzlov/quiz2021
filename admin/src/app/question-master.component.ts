import { Component, OnInit } from '@angular/core';
import { questions } from './data';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
})
export class QuestionMasterComponent implements OnInit {
  public questions: Question[] = questions;

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Question {
  id: number;
  question: string
  answers: Answer[];
  correct: number;
}

interface Answer {
  id: number;
  title: string;
}
