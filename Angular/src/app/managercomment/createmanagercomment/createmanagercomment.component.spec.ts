import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemanagercommentComponent } from './createmanagercomment.component';

describe('CreatemanagercommentComponent', () => {
  let component: CreatemanagercommentComponent;
  let fixture: ComponentFixture<CreatemanagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemanagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemanagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
