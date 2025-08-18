import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigator',
  imports: [
    RouterLink
  ],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css'
})
export class Navigator {
  @Input() label!: string;
  @Input() link!: string;
}
