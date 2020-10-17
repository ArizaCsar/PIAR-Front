import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionDepartamentoComponent } from './ventana-confirmacion-departamento.component';

describe('VentanaConfirmacionDepartamentoComponent', () => {
  let component: VentanaConfirmacionDepartamentoComponent;
  let fixture: ComponentFixture<VentanaConfirmacionDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
