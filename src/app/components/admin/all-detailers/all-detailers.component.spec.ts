import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailersComponent } from './all-detailers.component';

describe('AllDetailersComponent', () => {
  let component: AllDetailersComponent;
  let fixture: ComponentFixture<AllDetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDetailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
