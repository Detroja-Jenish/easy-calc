import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMYKRGBComponent } from './cmyk-rgb.component';

describe('CMYKRGBComponent', () => {
  let component: CMYKRGBComponent;
  let fixture: ComponentFixture<CMYKRGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CMYKRGBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMYKRGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
