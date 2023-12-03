import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSupprimerArticleComponent } from './pop-up-supprimer-article.component';

describe('PopUpSupprimerArticleComponent', () => {
  let component: PopUpSupprimerArticleComponent;
  let fixture: ComponentFixture<PopUpSupprimerArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpSupprimerArticleComponent]
    });
    fixture = TestBed.createComponent(PopUpSupprimerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
