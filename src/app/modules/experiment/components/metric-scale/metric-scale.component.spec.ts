import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricScaleComponent } from './metric-scale.component';

describe('MetricScaleComponent', () => {
  let component: MetricScaleComponent;
  let fixture: ComponentFixture<MetricScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
