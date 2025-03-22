import { Component } from '@angular/core';

@Component({
    selector: 'app-routine-report',
    templateUrl: './routine-report.component.html',
    styleUrls: ['./routine-report.component.css'],
})
export class RoutineReportComponent {
    tasks: string[] = ['1', '2', ' 3', '4', ' 5', '6'];

    addTask(t: string) {
        this.tasks.push(t);
    }
    removeTask(index: number) {
        this.tasks.splice(index, 1);
    }
}
