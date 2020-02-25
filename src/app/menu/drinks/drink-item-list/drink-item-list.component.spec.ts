import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkItemListComponent } from './drink-item-list.component';

describe('DrinkItemListComponent', () => {
  let component: DrinkItemListComponent;
  let fixture: ComponentFixture<DrinkItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
