import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvesComponent } from './aves/aves.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'aves', component: AvesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
