import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleResultComponent } from './google-result.component';

describe('GoogleResultComponent', () => {
  let component: GoogleResultComponent;
  let fixture: ComponentFixture<GoogleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
