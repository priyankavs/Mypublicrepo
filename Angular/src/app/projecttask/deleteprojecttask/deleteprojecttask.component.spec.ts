import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprojecttaskComponent } from './deleteprojecttask.component';

describe('DeleteprojecttaskComponent', () => {
  let component: DeleteprojecttaskComponent;
  let fixture: ComponentFixture<DeleteprojecttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprojecttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
