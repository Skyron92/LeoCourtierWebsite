import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
@Input() square: string = "false";

@ViewChild('projectContent') projectContent!: ElementRef<HTMLElement>;

srcUrl?: SafeResourceUrl;

firstParagraph : string = '';
secondParagraph : string = '';

ytbEmbedUrl : string='//www.youtube.com/embed/';

constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.HandleYtbUrl();
    this.HandleDescription();
    this.bindScrollEvent();
}
// Convert a YouTube id to trusted url
  private HandleYtbUrl() {
    if (this.src) {
      if (this.contentType === 'ytb') {
        this.src = this.ytbEmbedUrl + this.src;
      }
      const url = this.src;
      this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

// Split the input description to make it usable for the html.
  private HandleDescription() {
    if (this.description.includes('|')) {
      const split = this.description.split('|');
      this.firstParagraph = split[0];
      this.secondParagraph = split[1];
    } else this.firstParagraph = this.description
  }

  // trigger limits of the project content scale animation.
  triggerBottom : number = window.innerHeight / 5 * 5;
  triggerTop : number = window.innerHeight / 5 * 2;

  private bindScrollEvent() {
    window.addEventListener('scroll', ()=>this.onScroll())
  }

  onScroll() {
    this.tryAnimateProjectContent();
  }
// Animate the project content if the limits are triggered
  tryAnimateProjectContent() : void {
    if(!this.projectContent)return;
    const top = this.projectContent.nativeElement.getBoundingClientRect().top;
    const bottom = this.projectContent.nativeElement.getBoundingClientRect().bottom;
    console.log(top+' / ' + this.triggerTop +' / '+ bottom+' / ' + this.triggerBottom);
    if(bottom > this.triggerTop && top < this.triggerBottom) this.projectContent.nativeElement.classList.add('show');
    else this.projectContent.nativeElement.classList.remove('show');
  }

  // Split input icons url to get multiples infos
  getIconInfos(index : number) : string[]{
  if(this.iconsUrl){
    return this.iconsUrl[index].split('|');
  }
  return [];
  }
}
