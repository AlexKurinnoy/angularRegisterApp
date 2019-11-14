import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticllistComponent } from './articllist.component';

describe('ArticllistComponent', () => {
  let component: ArticllistComponent;
  let fixture: ComponentFixture<ArticllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
