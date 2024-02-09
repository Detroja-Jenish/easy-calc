import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsExponentComponent } from './maths-exponent.component';

describe('MathsExponentComponent', () => {
  let component: MathsExponentComponent;
  let fixture: ComponentFixture<MathsExponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathsExponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathsExponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
