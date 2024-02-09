import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianComponent } from './median.component';

describe('MedianComponent', () => {
  let component: MedianComponent;
  let fixture: ComponentFixture<MedianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
