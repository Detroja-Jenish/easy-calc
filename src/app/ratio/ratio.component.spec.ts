import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioComponent } from './ratio.component';

describe('RatioComponent', () => {
  let component: RatioComponent;
  let fixture: ComponentFixture<RatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
