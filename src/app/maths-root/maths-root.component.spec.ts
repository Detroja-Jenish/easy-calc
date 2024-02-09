import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsRootComponent } from './maths-root.component';

describe('MathsRootComponent', () => {
  let component: MathsRootComponent;
  let fixture: ComponentFixture<MathsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathsRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
