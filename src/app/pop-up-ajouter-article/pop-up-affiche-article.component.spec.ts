import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAfficheArticleComponent } from './pop-up-affiche-article.component';

describe('PopUpAfficheArticleComponent', () => {
  let component: PopUpAfficheArticleComponent;
  let fixture: ComponentFixture<PopUpAfficheArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAfficheArticleComponent]
    });
    fixture = TestBed.createComponent(PopUpAfficheArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
