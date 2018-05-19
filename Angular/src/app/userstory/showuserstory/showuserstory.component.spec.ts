import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserstoryComponent } from './showuserstory.component';

describe('ShowuserstoryComponent', () => {
  let component: ShowuserstoryComponent;
  let fixture: ComponentFixture<ShowuserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
