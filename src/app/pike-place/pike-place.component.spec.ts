import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikePlaceComponent } from './pike-place.component';

describe('PikePlaceComponent', () => {
  let component: PikePlaceComponent;
  let fixture: ComponentFixture<PikePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
