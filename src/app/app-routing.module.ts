import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: 'glossario', component: DashboardPageComponent },
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
