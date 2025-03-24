import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-routine-report',
    templateUrl: './routine-report.component.html',
    styleUrls: ['./routine-report.component.css'],
})
export class RoutineReportComponent implements OnInit {
    tasks: string[] = ['Early wakeup', 'Running', 'Excersice'];
    days: string[] = [];
    taskState: object = {
        'Early wakeup': 'pending',
        Running: 'pending',
        Excersice: 'pending',
    };
    currentMonth: number = new Date().getMonth();
    ngOnInit(): void {
        this.getDaysInCurrentMonth();
        console.log(this.days);
    }
    getDaysInCurrentMonth = () => {
        const now = new Date();
        const tDay = new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0
        ).getDate();

        this.days = Array.from(
            { length: tDay },
            (_, i) =>
                new Date().getFullYear() +
                ' ' +
                (new Date().getMonth() + 1) +
                ' ' +
                (i + 1)
        );
    };
    addTask(t: string) {
        this.tasks.push(t);
    }
    removeTask(index: number) {
        setTimeout(() => {
            this.tasks.splice(index, 1);
        }, 300);
    }
}
