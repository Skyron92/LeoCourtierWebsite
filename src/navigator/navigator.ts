import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  imports: [],
  templateUrl: './navigator.html',
  styleUrl: './navigator.css'
})
export class Navigator {
  @Input() label!: string;
  @Input() link!: string;
}
