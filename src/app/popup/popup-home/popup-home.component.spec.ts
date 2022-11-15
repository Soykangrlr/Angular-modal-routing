import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHomeComponent } from './popup-home.component';

describe('PopupHomeComponent', () => {
  let component: PopupHomeComponent;
  let fixture: ComponentFixture<PopupHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
