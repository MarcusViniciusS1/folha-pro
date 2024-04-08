import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FolhaPagamentoPage } from './folha-pagamento.page';

describe('FolhaPagamentoPage', () => {
  let component: FolhaPagamentoPage;
  let fixture: ComponentFixture<FolhaPagamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FolhaPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
