import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-yes-svg',
    templateUrl: './yes-svg.component.html',
    styleUrls: ['./yes-svg.component.css'],
})
export class YesSvgComponent {
    @Input() backgroundFill!: string;
    @Input() fill!: string;
}
