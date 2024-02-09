import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardDeviationComponent } from './standard-deviation.component';

describe('StandardDeviationComponent', () => {
  let component: StandardDeviationComponent;
  let fixture: ComponentFixture<StandardDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandardDeviationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
