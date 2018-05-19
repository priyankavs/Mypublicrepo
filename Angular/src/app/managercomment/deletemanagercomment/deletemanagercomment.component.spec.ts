import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemanagercommentComponent } from './deletemanagercomment.component';

describe('DeletemanagercommentComponent', () => {
  let component: DeletemanagercommentComponent;
  let fixture: ComponentFixture<DeletemanagercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemanagercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemanagercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
