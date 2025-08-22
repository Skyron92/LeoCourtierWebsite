import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner implements OnInit {
@Input() intro!: string;

ngOnInit() {
  const val = document.getElementsByClassName('content')[0].getBoundingClientRect().bottom * 2.5;
  document.documentElement.style.setProperty('--bottom-point', val + 'px');
}
}
