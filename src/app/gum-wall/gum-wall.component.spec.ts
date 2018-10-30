import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GumWallComponent } from './gum-wall.component';

describe('GumWallComponent', () => {
  let component: GumWallComponent;
  let fixture: ComponentFixture<GumWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GumWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GumWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
