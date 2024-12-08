import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryDetailPageComponent } from './glossary-detail-page.component';

describe('GlossaryDetailPageComponent', () => {
  let component: GlossaryDetailPageComponent;
  let fixture: ComponentFixture<GlossaryDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlossaryDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossaryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
