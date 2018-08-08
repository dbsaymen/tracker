import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehiculesComponent } from './manage-vehicules.component';

describe('ManageVehiculesComponent', () => {
  let component: ManageVehiculesComponent;
  let fixture: ComponentFixture<ManageVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVehiculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
