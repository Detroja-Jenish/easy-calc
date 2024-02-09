import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcmmComponent } from './lcmm.component';

describe('LcmmComponent', () => {
  let component: LcmmComponent;
  let fixture: ComponentFixture<LcmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcmmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LcmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
