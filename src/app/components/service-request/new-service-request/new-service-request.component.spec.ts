import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceRequestComponent } from './new-service-request.component';

describe('NewServiceRequestComponent', () => {
  let component: NewServiceRequestComponent;
  let fixture: ComponentFixture<NewServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewServiceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
