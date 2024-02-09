import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTableComponent } from './color-table.component';

describe('ColorTableComponent', () => {
  let component: ColorTableComponent;
  let fixture: ComponentFixture<ColorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
