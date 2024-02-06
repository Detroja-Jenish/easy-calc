import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCalcComponent } from './matrix-calc.component';

describe('MatrixCalcComponent', () => {
  let component: MatrixCalcComponent;
  let fixture: ComponentFixture<MatrixCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
