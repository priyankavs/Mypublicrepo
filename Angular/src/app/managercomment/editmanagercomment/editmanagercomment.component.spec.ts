import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanagercommentComponent } from './editmanagercomment.component';

describe('EditmanagercommentComponent', () => {
  let component: EditmanagercommentComponent;
  let fixture: ComponentFixture<EditmanagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmanagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmanagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
