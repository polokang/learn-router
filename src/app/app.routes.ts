import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JokesComponent} from './jokes/jokes.component';

export const appRoutes=[
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'jokes',
        component:JokesComponent
    },
    {
		path:'**',
		component:HomeComponent
	}
];
