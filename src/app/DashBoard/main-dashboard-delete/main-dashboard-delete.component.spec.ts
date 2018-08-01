import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardDeleteComponent } from './main-dashboard-delete.component';

describe('MainDashboardDeleteComponent', () => {
  let component: MainDashboardDeleteComponent;
  let fixture: ComponentFixture<MainDashboardDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashboardDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
