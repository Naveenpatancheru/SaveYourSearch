import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedbingsearchComponent } from './savedbingsearch.component';

describe('SavedbingsearchComponent', () => {
  let component: SavedbingsearchComponent;
  let fixture: ComponentFixture<SavedbingsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedbingsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedbingsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
