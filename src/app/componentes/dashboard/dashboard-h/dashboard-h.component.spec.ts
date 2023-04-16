import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHComponent } from './dashboard-h.component';

describe('DashboardHComponent', () => {
  let component: DashboardHComponent;
  let fixture: ComponentFixture<DashboardHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
