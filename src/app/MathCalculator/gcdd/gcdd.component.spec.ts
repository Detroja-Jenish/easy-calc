import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcddComponent } from './gcdd.component';

describe('GcddComponent', () => {
  let component: GcddComponent;
  let fixture: ComponentFixture<GcddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GcddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GcddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
