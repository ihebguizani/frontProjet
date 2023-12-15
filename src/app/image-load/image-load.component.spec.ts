import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadComponent } from './image-load.component';

describe('ImageLoadComponent', () => {
  let component: ImageLoadComponent;
  let fixture: ComponentFixture<ImageLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageLoadComponent]
    });
    fixture = TestBed.createComponent(ImageLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
