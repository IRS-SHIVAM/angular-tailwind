import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesSvgComponent } from './yes-svg.component';

describe('YesSvgComponent', () => {
  let component: YesSvgComponent;
  let fixture: ComponentFixture<YesSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
