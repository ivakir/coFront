import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../utils/app-constants';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { AnswerService } from '../../services/answer.service';
import { SolutionResponse } from '../../models/solution-response';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  AppConstants = AppConstants;
  columns: string[] = ['taskTitle', 'output', 'memory', 'cpuTime'];
  tableData: MatTableDataSource<SolutionResponse> = new MatTableDataSource<SolutionResponse>();
  reservations: BehaviorSubject<SolutionResponse[]> = new BehaviorSubject(null);

  constructor(private answerService: AnswerService) {
  }

  ngOnInit() {
    this.answerService.getSubmitsAnswers().subscribe((data: SolutionResponse[]) => {
        this.tableData = new MatTableDataSource<SolutionResponse>(data);
      }, error => console.log(error));
  }
}
