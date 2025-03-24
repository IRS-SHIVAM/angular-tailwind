import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutineReportComponent } from './components/routine-report/routine-report.component';
import { ExpenceReportComponent } from './components/expence-report/expence-report.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YesSvgComponent } from './components/yes-svg/yes-svg.component';
import { NoSvgComponent } from './components/no-svg/no-svg.component';
import { PendingSvgComponent } from './components/pending-svg/pending-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutineReportComponent,
    ExpenceReportComponent,
    NavbarComponent,
    YesSvgComponent,
    NoSvgComponent,
    PendingSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
