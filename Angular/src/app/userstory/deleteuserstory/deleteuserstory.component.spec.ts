import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserstoryComponent } from './deleteuserstory.component';

describe('DeleteuserstoryComponent', () => {
  let component: DeleteuserstoryComponent;
  let fixture: ComponentFixture<DeleteuserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteuserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
