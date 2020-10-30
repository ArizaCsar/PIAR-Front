import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarDepartamentoComponent } from './ventana-crear-editar-departamento.component';

describe('VentanaCrearEditarDepartamentoComponent', () => {
  let component: VentanaCrearEditarDepartamentoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
