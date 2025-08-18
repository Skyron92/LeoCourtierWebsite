import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../header/header';
import {Banner} from '../banner/banner';
import {ProjectPanel} from '../project-panel/project-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Banner, ProjectPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Leo Courtier');


}
