import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
@Input() intro!: string;
}
