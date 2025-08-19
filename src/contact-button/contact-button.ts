import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  imports: [],
  templateUrl: './contact-button.html',
  styleUrl: './contact-button.css'
})
export class ContactButton {
@Input() label!: string;
@Input() icon!: string;
@Input() url!: string;
@Input() target?:string = "_blank";
}
