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
  dataSearch?: IGlossaryData[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.dataSearch = this.data;
  }

  openModal(item: IGlossaryData) {
    this.router.navigate(['/glossario/detalhe', item.id]);
  }

  search(query: Event) {
    const newValue = (query.target as HTMLInputElement).value;

    if (!newValue.length) {
      this.dataSearch = this.data;
      return;
    }

    this.dataSearch = this.data.filter(item =>
      item.title.toLowerCase().includes(newValue)
    );
  }
}
