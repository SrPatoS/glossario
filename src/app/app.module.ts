import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';
import { GlossaryDetailPageComponent } from './pages/glossary-detail-page/glossary-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    GlossaryPageComponent,
    GuidePageComponent,
    CreditsPageComponent,
    ThanksPageComponent,
    GlossaryDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIcon,
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
