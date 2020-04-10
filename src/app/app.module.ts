import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { RoundPipe } from './round.pipe';
import { IngresosService } from './ingresos/ingresos.service';
import { EgresoService } from './egresos/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [IngresosService,EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
