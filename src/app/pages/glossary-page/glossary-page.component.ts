import { Component } from '@angular/core';
import { fakeData } from './fake-data';

@Component({
  selector: 'app-glossary-page',
  standalone: false,

  templateUrl: './glossary-page.component.html',
  styleUrl: './glossary-page.component.scss'
})
export class GlossaryPageComponent {
  data = fakeData;
}
