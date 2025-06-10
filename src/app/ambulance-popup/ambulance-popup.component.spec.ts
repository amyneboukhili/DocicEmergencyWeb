import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancePopupComponent } from './ambulance-popup.component';

describe('AmbulancePopupComponent', () => {
  let component: AmbulancePopupComponent;
  let fixture: ComponentFixture<AmbulancePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulancePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulancePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
