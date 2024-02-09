import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiooComponent } from './ratioo.component';

describe('RatiooComponent', () => {
  let component: RatiooComponent;
  let fixture: ComponentFixture<RatiooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatiooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatiooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
