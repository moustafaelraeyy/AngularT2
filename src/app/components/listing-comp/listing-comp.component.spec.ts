import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCompComponent } from './listing-comp.component';

describe('ListingCompComponent', () => {
  let component: ListingCompComponent;
  let fixture: ComponentFixture<ListingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
