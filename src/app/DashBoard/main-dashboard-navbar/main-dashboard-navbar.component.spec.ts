import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardNavbarComponent } from './main-dashboard-navbar.component';

describe('MainDashboardNavbarComponent', () => {
  let component: MainDashboardNavbarComponent;
  let fixture: ComponentFixture<MainDashboardNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashboardNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
