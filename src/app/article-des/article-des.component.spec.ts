import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDesComponent } from './article-des.component';

describe('ArticleDesComponent', () => {
  let component: ArticleDesComponent;
  let fixture: ComponentFixture<ArticleDesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleDesComponent]
    });
    fixture = TestBed.createComponent(ArticleDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
