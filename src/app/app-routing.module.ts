import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { GlossaryDetailPageComponent } from './pages/glossary-detail-page/glossary-detail-page.component';
import { GuidePageComponent } from './pages/guide-page/guide-page.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';

const routes: Routes = [
  { path: 'inicio', component: DashboardPageComponent },
  { path: 'glossario', component: GlossaryPageComponent },
  { path: 'glossario/detalhe/:id', component: GlossaryDetailPageComponent },
  { path: 'guia', component: GuidePageComponent },
  { path: 'creditos', component: CreditsPageComponent },
  { path: 'agradecimentos', component: ThanksPageComponent },
  { path: '', redirectTo: '/glossario', pathMatch: 'full' },
  { path: '**', redirectTo: '/glossario' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
