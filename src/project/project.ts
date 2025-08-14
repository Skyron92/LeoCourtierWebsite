import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit {
@Input() projectName!: string;
@Input() video?: string;
@Input() description!: string;
@Input() iconsUrl?: string[];

firstParagraph : string = '';
secondParagraph : string = '';

ngOnInit() {
  if(this.description.includes('|')){
    const split = this.description.split('|');
    this.firstParagraph = split[0];
    this.secondParagraph = split[1];
  }
  else this.firstParagraph = this.description;
}
}
