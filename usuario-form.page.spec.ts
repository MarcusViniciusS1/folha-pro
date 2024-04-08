import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioFormPage } from './usuario-form.page';

describe('UsuarioFormPage', () => {
  let component: UsuarioFormPage;
  let fixture: ComponentFixture<UsuarioFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
