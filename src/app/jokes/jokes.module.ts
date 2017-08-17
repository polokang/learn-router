import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';

@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    RouterModule.forChild(jokesRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class JokesModule { }
