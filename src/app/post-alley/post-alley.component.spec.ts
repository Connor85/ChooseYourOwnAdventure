import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlleyComponent } from './post-alley.component';

describe('PostAlleyComponent', () => {
  let component: PostAlleyComponent;
  let fixture: ComponentFixture<PostAlleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAlleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAlleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
