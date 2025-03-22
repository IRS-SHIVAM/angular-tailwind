import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutineReportComponent } from './components/routine-report/routine-report.component';
import { ExpenceReportComponent } from './components/expence-report/expence-report.component';

const routes: Routes = [
    { path: 'routine-report', component: RoutineReportComponent },
    { path: 'expence-report', component: ExpenceReportComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
