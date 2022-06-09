import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';

//* para la comunicacion con un servidor remoto
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipoDetalleComponent,
    EquipoComponent,
    DashboardComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
