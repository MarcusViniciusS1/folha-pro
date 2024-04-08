import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoleritePagePage } from './holerite-page.page';

describe('HoleritePagePage', () => {
  let component: HoleritePagePage;
  let fixture: ComponentFixture<HoleritePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoleritePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
