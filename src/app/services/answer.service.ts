import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../utils/app-constants';
import { SolutionResponse } from '../models/solution-response';
import { AnswerWithTaskTitle } from '../models/answer-with-task-title';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {}

  getSubmitsAnswers(): Observable<SolutionResponse[]> {
    return this.http.get<SolutionResponse[]>(AppConstants.RESPONSES);
  }

  submitTask(answer: AnswerWithTaskTitle): Observable<SolutionResponse> {
    return this.http.post<SolutionResponse>(AppConstants.SUBMIT_URL, answer);
  }
}
