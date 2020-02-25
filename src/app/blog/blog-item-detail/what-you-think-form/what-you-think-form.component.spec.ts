import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouThinkFormComponent } from './what-you-think-form.component';

describe('WhatYouThinkFormComponent', () => {
  let component: WhatYouThinkFormComponent;
  let fixture: ComponentFixture<WhatYouThinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouThinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouThinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
