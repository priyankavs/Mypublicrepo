import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprojecttaskComponent } from './showprojecttask.component';

describe('ShowprojecttaskComponent', () => {
  let component: ShowprojecttaskComponent;
  let fixture: ComponentFixture<ShowprojecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprojecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
