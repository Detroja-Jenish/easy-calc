import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RGBHEXComponent } from './rgb-hex.component';

describe('RGBHEXComponent', () => {
  let component: RGBHEXComponent;
  let fixture: ComponentFixture<RGBHEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RGBHEXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RGBHEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
