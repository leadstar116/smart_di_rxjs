import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingResultComponent } from './bing-result.component';

describe('BingResultComponent', () => {
  let component: BingResultComponent;
  let fixture: ComponentFixture<BingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
