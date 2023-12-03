import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleByUserComponent } from './liste-article-by-user.component';

describe('ListeArticleByUserComponent', () => {
  let component: ListeArticleByUserComponent;
  let fixture: ComponentFixture<ListeArticleByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeArticleByUserComponent]
    });
    fixture = TestBed.createComponent(ListeArticleByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
