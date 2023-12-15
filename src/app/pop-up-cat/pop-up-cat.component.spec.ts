import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCatComponent } from './pop-up-cat.component';

describe('PopUpCatComponent', () => {
  let component: PopUpCatComponent;
  let fixture: ComponentFixture<PopUpCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpCatComponent]
    });
    fixture = TestBed.createComponent(PopUpCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
