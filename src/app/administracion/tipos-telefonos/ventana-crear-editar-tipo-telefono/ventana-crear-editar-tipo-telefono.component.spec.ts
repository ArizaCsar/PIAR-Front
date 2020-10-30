import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarTipoTelefonoComponent } from './ventana-crear-editar-tipo-telefono.component';

describe('VentanaCrearEditarTipoTelefonoComponent', () => {
  let component: VentanaCrearEditarTipoTelefonoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarTipoTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarTipoTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarTipoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
