import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWorkTopCategoryListComponent } from './art-work-top-category-list.component';

describe('ArtWorkTopCategoryListComponent', () => {
  let component: ArtWorkTopCategoryListComponent;
  let fixture: ComponentFixture<ArtWorkTopCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtWorkTopCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWorkTopCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
