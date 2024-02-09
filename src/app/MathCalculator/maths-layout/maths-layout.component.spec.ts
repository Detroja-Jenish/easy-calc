import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsLayoutComponent } from './maths-layout.component';

describe('MathsLayoutComponent', () => {
  let component: MathsLayoutComponent;
  let fixture: ComponentFixture<MathsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
