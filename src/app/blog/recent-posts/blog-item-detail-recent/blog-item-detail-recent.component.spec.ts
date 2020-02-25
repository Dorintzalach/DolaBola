import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemDetailRecentComponent } from './blog-item-detail-recent.component';

describe('BlogItemDetailRecentComponent', () => {
  let component: BlogItemDetailRecentComponent;
  let fixture: ComponentFixture<BlogItemDetailRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemDetailRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemDetailRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
