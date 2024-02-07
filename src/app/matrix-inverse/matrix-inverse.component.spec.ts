import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixInverseComponent } from './matrix-inverse.component';

describe('MatrixInverseComponent', () => {
  let component: MatrixInverseComponent;
  let fixture: ComponentFixture<MatrixInverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixInverseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixInverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
