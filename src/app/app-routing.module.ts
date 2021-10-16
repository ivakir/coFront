import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './components/contents/contents.component';
import { SubmitTaskComponent } from './components/submit-task/submit-task.component';


const routes: Routes = [
  {
    path: 'home',
    component: SubmitTaskComponent,
  },
  {
    path: 'contents',
    component: ContentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
