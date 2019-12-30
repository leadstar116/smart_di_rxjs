import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YandexResultComponent } from './yandex-result.component';

describe('YandexResultComponent', () => {
  let component: YandexResultComponent;
  let fixture: ComponentFixture<YandexResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YandexResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YandexResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
