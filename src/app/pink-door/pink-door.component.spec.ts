import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkDoorComponent } from './pink-door.component';

describe('PinkDoorComponent', () => {
  let component: PinkDoorComponent;
  let fixture: ComponentFixture<PinkDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
