import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeadComponent } from './new-head.component';

describe('NewHeadComponent', () => {
  let component: NewHeadComponent;
  let fixture: ComponentFixture<NewHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHeadComponent]
    });
    fixture = TestBed.createComponent(NewHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
