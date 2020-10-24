import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarTipoDiscapacidadComponent } from './ventana-crear-editar-tipo-discapacidad.component';

describe('VentanaCrearEditarTipoDiscapacidadComponent', () => {
  let component: VentanaCrearEditarTipoDiscapacidadComponent;
  let fixture: ComponentFixture<VentanaCrearEditarTipoDiscapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarTipoDiscapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarTipoDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
