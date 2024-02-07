import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalcComponent } from './age-calc.component';

describe('AgeCalcComponent', () => {
  let component: AgeCalcComponent;
  let fixture: ComponentFixture<AgeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
