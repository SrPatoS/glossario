import { Component } from '@angular/core';
import { fakeData, IGlossaryData } from './fake-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glossary-page',
  standalone: false,

  templateUrl: './glossary-page.component.html',
  styleUrl: './glossary-page.component.scss'
})
export class GlossaryPageComponent {
  data = fakeData;

  constructor(private router: Router) {
  }


  openModal(item: IGlossaryData) {
    this.router.navigate(['/glossario/detalhe', item.id]);
  }
}
