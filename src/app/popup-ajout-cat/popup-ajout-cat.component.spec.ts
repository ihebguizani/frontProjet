import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAjoutCatComponent } from './popup-ajout-cat.component';

describe('PopupAjoutCatComponent', () => {
  let component: PopupAjoutCatComponent;
  let fixture: ComponentFixture<PopupAjoutCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAjoutCatComponent]
    });
    fixture = TestBed.createComponent(PopupAjoutCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
