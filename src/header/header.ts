import {Component, OnInit} from '@angular/core';
import {Navigator} from '../navigator/navigator';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    Navigator,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  ngOnInit() {
    this.calculateHeaderColor();
  }

  #headerOpacity : number = 0.4;
  #overlayColor : string = '#FFFFFFFF';

  // Calculate header color to create illusion the header is a flat transparent object
  calculateHeaderColor () {
    let backgroundGradient = getComputedStyle(document.documentElement).getPropertyValue('--background-gradient');
    const matches = backgroundGradient.split(',');
    if(matches) {
      const col1 = matches[1].trim();
      const col2 = matches[2].trim();
      const col3 = matches[3].trim();

      const headerColor1 =this.#calculateColor(col1);
      const headerColor2 =this.#calculateColor(col2);
      const headerColor3 =this.#calculateColor(col3);

      const val = `linear-gradient(90deg, ${headerColor1}, ${headerColor2}, ${headerColor3}`;
      document.documentElement.style.setProperty('--header-gradient', val);
      document.documentElement.style.setProperty('--scrollbar-bg-color', headerColor3);
    }
  }

  #calculateColor( color:string):string{
    let bg = this.hexToRgb(color);
    let ov = this.hexToRgb(this.#overlayColor);
    if (!bg || !ov) throw new Error("Invalid color format !");

    const r = Math.round(this.#headerOpacity * ov.r + (1 - this.#headerOpacity) * bg.r);
    const g = Math.round(this.#headerOpacity * ov.g + (1 - this.#headerOpacity) * bg.g);
    const b = Math.round(this.#headerOpacity * ov.b + (1 - this.#headerOpacity) * bg.b);

    return this.rgbToHex(r, g, b);
  }

  hexToRgb(hex: string) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  rgbToHex(r: number, g: number, b: number) {
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
  }
}
