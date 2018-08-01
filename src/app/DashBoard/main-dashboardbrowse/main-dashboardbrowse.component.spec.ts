import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardbrowseComponent } from './main-dashboardbrowse.component';

describe('MainDashboardbrowseComponent', () => {
  let component: MainDashboardbrowseComponent;
  let fixture: ComponentFixture<MainDashboardbrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDashboardbrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardbrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
