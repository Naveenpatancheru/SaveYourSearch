import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingwebsearchComponent } from './bingwebsearch.component';

describe('BingwebsearchComponent', () => {
  let component: BingwebsearchComponent;
  let fixture: ComponentFixture<BingwebsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingwebsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingwebsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
