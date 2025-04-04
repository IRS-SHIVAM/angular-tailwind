import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceReportComponent } from './expence-report.component';

describe('ExpenceReportComponent', () => {
  let component: ExpenceReportComponent;
  let fixture: ComponentFixture<ExpenceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
