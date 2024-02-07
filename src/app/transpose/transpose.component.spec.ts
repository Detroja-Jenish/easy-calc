import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposeComponent } from './transpose.component';

describe('TransposeComponent', () => {
  let component: TransposeComponent;
  let fixture: ComponentFixture<TransposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
