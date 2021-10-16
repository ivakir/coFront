export class Answer {
  // Normally clientId, clientSecret would be saved in user account in db for the moment it is just hardcoded
  clientId = '7191677f77ca97c6c7a65a58bce17e79';
  clientSecret = 'bbe120ecd1128cd824b45c09ac02056fac59305bd935bf6002906a686b911b03';
  language: string;
  script: string;
  stdin: string;
  args: string;


  constructor(language: string) {
    this.language = language;
  }

}
