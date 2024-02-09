import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEXRGBComponent } from './hex-rgb.component';

describe('HEXRGBComponent', () => {
  let component: HEXRGBComponent;
  let fixture: ComponentFixture<HEXRGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HEXRGBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HEXRGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
