import { Routes } from '@angular/router';
import {ProjectPanel} from '../project-panel/project-panel';
import {ContactPanel} from '../contact-panel/contact-panel';

export const routes: Routes = [
  {path:'', component: ProjectPanel},
  {path:'projects', component: ProjectPanel},
  {path:'contact', component: ContactPanel},
];
