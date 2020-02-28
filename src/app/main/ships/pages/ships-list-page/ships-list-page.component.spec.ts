import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsListPageComponent } from './ships-list-page.component';

describe('ShipsListPageComponent', () => {
  let component: ShipsListPageComponent;
  let fixture: ComponentFixture<ShipsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
