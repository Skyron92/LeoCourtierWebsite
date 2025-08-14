import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit {
@Input() projectName!: string;
@Input() contentType!: string;
@Input() src?: string;
@Input() description!: string;
@Input() iconsUrl?: string[];
@Input() linkToProject?: string;

srcUrl?: SafeResourceUrl;

firstParagraph : string = '';
secondParagraph : string = '';

constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
  if(this.src){
    const url = this.src;
    this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  if(this.description.includes('|')){
    const split = this.description.split('|');
    this.firstParagraph = split[0];
    this.secondParagraph = split[1];
  }
  else this.firstParagraph = this.description
}

getIconInfos(index : number) : string[]{
  if(this.iconsUrl){
    return this.iconsUrl[index].split('|');
  }
  return [];
}
}
