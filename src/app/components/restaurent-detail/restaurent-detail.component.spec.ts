import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentDetailComponent } from './restaurent-detail.component';

describe('RestaurentDetailComponent', () => {
  let component: RestaurentDetailComponent;
  let fixture: ComponentFixture<RestaurentDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurentDetailComponent]
    });
    fixture = TestBed.createComponent(RestaurentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
