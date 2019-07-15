// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FwModule } from '../fw/fw.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { RoutesComponent } from './routes/routes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StopsComponent } from './stops/stops.component';
import { AppComponent } from './app.component';

// Services
import { RouteService } from './services/route.service';
import { StopService } from './services/stop.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    DashboardComponent,
    MapComponent,
    AdminComponent,
    ContactComponent,
    AboutComponent,
    StopsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FwModule
  ],
  providers: [
    RouteService,
    StopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
