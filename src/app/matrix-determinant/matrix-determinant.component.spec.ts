import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixDeterminantComponent } from './matrix-determinant.component';

describe('MatrixDeterminantComponent', () => {
  let component: MatrixDeterminantComponent;
  let fixture: ComponentFixture<MatrixDeterminantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixDeterminantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixDeterminantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
