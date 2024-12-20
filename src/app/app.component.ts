import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grossario';

  isExpanded = false;

  toggleSidenav(expanded: boolean): void {
    this.isExpanded = expanded;
  }
}
