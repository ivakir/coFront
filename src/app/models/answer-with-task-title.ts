import { Answer } from './answer';

export class AnswerWithTaskTitle {
  taskTitle: string;
  answer: Answer;

  constructor(taskTitle: string, answer: Answer) {
    this.taskTitle = taskTitle;
    this.answer = answer;
  }
}
