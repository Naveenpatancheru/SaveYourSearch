import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewnotesComponent } from './addnewnotes.component';

describe('AddnewnotesComponent', () => {
  let component: AddnewnotesComponent;
  let fixture: ComponentFixture<AddnewnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
