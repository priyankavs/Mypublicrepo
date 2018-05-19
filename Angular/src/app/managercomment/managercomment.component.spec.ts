import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagercommentComponent } from './managercomment.component';

describe('ManagercommentComponent', () => {
  let component: ManagercommentComponent;
  let fixture: ComponentFixture<ManagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
