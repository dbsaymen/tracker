import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTopBtnComponent } from './to-top-btn.component';

describe('ToTopBtnComponent', () => {
  let component: ToTopBtnComponent;
  let fixture: ComponentFixture<ToTopBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToTopBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
