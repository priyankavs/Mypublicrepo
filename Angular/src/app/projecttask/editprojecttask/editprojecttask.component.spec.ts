import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojecttaskComponent } from './editprojecttask.component';

describe('EditprojecttaskComponent', () => {
  let component: EditprojecttaskComponent;
  let fixture: ComponentFixture<EditprojecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprojecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
