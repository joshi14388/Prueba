import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { EquipoComponent } from './components/equipo/equipo.component';

const routes: Routes = [
  { path: 'equipo', component: EquipoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: EquipoDetalleComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
