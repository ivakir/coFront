import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Answer } from '../../models/answer';
import { AnswerService } from '../../services/answer.service';
import { SolutionResponse } from '../../models/solution-response';
import { AnswerWithTaskTitle } from '../../models/answer-with-task-title';

@Component({
  selector: 'app-submit-task',
  templateUrl: './submit-task.component.html',
  styleUrls: ['./submit-task.component.scss']
})
export class SubmitTaskComponent implements OnInit {

  availableTasks: Task[];
  availableCodingLanguages = ['java', 'php'];
  selectedTask: Task;
  answer: Answer;
  response: SolutionResponse;

  constructor(private answerService: AnswerService) {
  }

  ngOnInit() {
    this.initMockTasks();
    this.answer = new Answer('java');
  }

  private initMockTasks(): void {
    this.availableTasks = [
      new Task('Test task', 'Add arguments to submit form and return their sum'),
      new Task('Two Sum', 'Given an array of integers nums and an integer target, ' +
        'return indices of the two numbers such that they add up to target.'),
      new Task('3Sum', 'Given an integer array nums, return all the triplets [nums[i], ' +
        'nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.')
    ];
    this.selectedTask = this.availableTasks[0];
  }

  submit() {
    const answer = new AnswerWithTaskTitle(this.selectedTask.title, this.answer);
    this.answerService.submitTask(answer).subscribe((data: SolutionResponse) => {
      this.response = data;
    }, error => {
      console.log(error);
    });
  }
}
