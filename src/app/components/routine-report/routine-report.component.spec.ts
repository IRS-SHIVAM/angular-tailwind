import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineReportComponent } from './routine-report.component';

describe('RoutineReportComponent', () => {
  let component: RoutineReportComponent;
  let fixture: ComponentFixture<RoutineReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
