import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSvgComponent } from './pending-svg.component';

describe('PendingSvgComponent', () => {
  let component: PendingSvgComponent;
  let fixture: ComponentFixture<PendingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
