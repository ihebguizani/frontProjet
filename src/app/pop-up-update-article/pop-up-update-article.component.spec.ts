import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpUpdateArticleComponent } from './pop-up-update-article.component';

describe('PopUpUpdateArticleComponent', () => {
  let component: PopUpUpdateArticleComponent;
  let fixture: ComponentFixture<PopUpUpdateArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpUpdateArticleComponent]
    });
    fixture = TestBed.createComponent(PopUpUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
