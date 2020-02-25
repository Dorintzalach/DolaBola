import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropLineFormComponent } from './drop-line-form.component';

describe('DropLineFormComponent', () => {
  let component: DropLineFormComponent;
  let fixture: ComponentFixture<DropLineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropLineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropLineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
