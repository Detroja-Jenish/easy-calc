import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCalcListComponent } from './homepage-calc-list.component';

describe('HomepageCalcListComponent', () => {
  let component: HomepageCalcListComponent;
  let fixture: ComponentFixture<HomepageCalcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageCalcListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageCalcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
