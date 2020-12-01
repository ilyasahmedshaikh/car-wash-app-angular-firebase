import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailerComponent } from './add-detailer.component';

describe('AddDetailerComponent', () => {
  let component: AddDetailerComponent;
  let fixture: ComponentFixture<AddDetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
