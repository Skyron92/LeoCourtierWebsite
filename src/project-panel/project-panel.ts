import {Component} from '@angular/core';
import {Project} from '../project/project';

@Component({
  selector: 'app-project-panel',
  imports: [
    Project
  ],
  templateUrl: './project-panel.html',
  styleUrl: './project-panel.css'
})
export class ProjectPanel {
}
