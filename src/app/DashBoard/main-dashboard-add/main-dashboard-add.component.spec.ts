import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardAddComponent } from './main-dashboard-add.component';

describe('MainDashboardAddComponent', () => {
  let component: MainDashboardAddComponent;
  let fixture: ComponentFixture<MainDashboardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashboardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
