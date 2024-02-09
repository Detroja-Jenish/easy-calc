import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentComponent } from './exponent.component';

describe('ExponentComponent', () => {
  let component: ExponentComponent;
  let fixture: ComponentFixture<ExponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
