import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmanagercommentComponent } from './showmanagercomment.component';

describe('ShowmanagercommentComponent', () => {
  let component: ShowmanagercommentComponent;
  let fixture: ComponentFixture<ShowmanagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmanagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmanagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
