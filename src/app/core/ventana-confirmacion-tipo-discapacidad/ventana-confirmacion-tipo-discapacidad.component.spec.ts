import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionTipoDiscapacidadComponent } from './ventana-confirmacion-tipo-discapacidad.component';

describe('VentanaConfirmacionTipoDiscapacidadComponent', () => {
  let component: VentanaConfirmacionTipoDiscapacidadComponent;
  let fixture: ComponentFixture<VentanaConfirmacionTipoDiscapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionTipoDiscapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionTipoDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
