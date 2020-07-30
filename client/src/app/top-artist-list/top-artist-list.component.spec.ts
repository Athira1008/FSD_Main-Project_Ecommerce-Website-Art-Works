import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistListComponent } from './top-artist-list.component';

describe('TopArtistListComponent', () => {
  let component: TopArtistListComponent;
  let fixture: ComponentFixture<TopArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopArtistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
