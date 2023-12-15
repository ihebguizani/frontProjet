import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagelistComponent } from './imagelist.component';

describe('ImagelistComponent', () => {
  let component: ImagelistComponent;
  let fixture: ComponentFixture<ImagelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagelistComponent]
    });
    fixture = TestBed.createComponent(ImagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
