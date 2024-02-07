import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixRankComponent } from './matrix-rank.component';

describe('MatrixRankComponent', () => {
  let component: MatrixRankComponent;
  let fixture: ComponentFixture<MatrixRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixRankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
