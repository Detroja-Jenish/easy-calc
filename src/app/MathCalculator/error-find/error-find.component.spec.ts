import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFindComponent } from './error-find.component';

describe('ErrorFindComponent', () => {
  let component: ErrorFindComponent;
  let fixture: ComponentFixture<ErrorFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorFindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
