import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';

export const homeRoutes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'pictures',
                pathMatch: 'full'
            },
            {
                path: 'pictures',
                component: PictureComponent
            },
            {
                path: 'text',
                component: TextComponent
            },
            {
                path: '**',
                component: PictureComponent
            }
        ]
    }
];
