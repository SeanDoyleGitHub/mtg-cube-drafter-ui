import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StylesComponent} from './styles/styles.component';

const routes: Routes = [
  {path: 'styles', component: StylesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
