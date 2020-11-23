import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPackagesComponent } from './all-packages.component';

describe('AllPackagesComponent', () => {
  let component: AllPackagesComponent;
  let fixture: ComponentFixture<AllPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
