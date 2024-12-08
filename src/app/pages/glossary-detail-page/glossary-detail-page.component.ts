import { Component } from '@angular/core';
import { fakeData, IGlossaryData } from '../glossary-page/fake-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-glossary-detail-page',
  standalone: false,

  templateUrl: './glossary-detail-page.component.html',
  styleUrl: './glossary-detail-page.component.scss'
})
export class GlossaryDetailPageComponent {
  item!: IGlossaryData;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = fakeData.find(item => item.id === id)!;
  }
}
