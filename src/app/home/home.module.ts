import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    HomeComponent,
    PictureComponent,
    TextComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
