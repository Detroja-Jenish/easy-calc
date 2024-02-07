import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcmComponent } from './lcm.component';

describe('LcmComponent', () => {
  let component: LcmComponent;
  let fixture: ComponentFixture<LcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
