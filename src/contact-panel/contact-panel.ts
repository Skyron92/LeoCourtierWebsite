import { Component } from '@angular/core';
import {ContactButton} from '../contact-button/contact-button';

@Component({
  selector: 'app-contact-panel',
  imports: [
    ContactButton
  ],
  templateUrl: './contact-panel.html',
  styleUrl: './contact-panel.css'
})
export class ContactPanel {

}
