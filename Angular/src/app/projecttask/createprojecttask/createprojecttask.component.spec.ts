import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprojecttaskComponent } from './createprojecttask.component';

describe('CreateprojecttaskComponent', () => {
  let component: CreateprojecttaskComponent;
  let fixture: ComponentFixture<CreateprojecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprojecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
