import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorLayoutComponent } from './color-layout.component';

describe('ColorLayoutComponent', () => {
  let component: ColorLayoutComponent;
  let fixture: ComponentFixture<ColorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
