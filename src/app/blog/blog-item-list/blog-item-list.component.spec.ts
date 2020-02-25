import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemListComponent } from './blog-item-list.component';

describe('BlogItemListComponent', () => {
  let component: BlogItemListComponent;
  let fixture: ComponentFixture<BlogItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
