import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSvgComponent } from './no-svg.component';

describe('NoSvgComponent', () => {
  let component: NoSvgComponent;
  let fixture: ComponentFixture<NoSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
