import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { GlossaryPageComponent } from './pages/glossary-page/glossary-page.component';
import { GlossaryDetailPageComponent } from './pages/glossary-detail-page/glossary-detail-page.component';

const routes: Routes = [
  { path: 'glossario', component: GlossaryPageComponent },
  { path: 'glossario/detalhe/:id', component: GlossaryDetailPageComponent },
  { path: 'guia', component: DashboardPageComponent },
  { path: 'agradecimentos', component: DashboardPageComponent },
  { path: '', redirectTo: '/glossario', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/glossario' }, // Redirecionamento para rota inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
