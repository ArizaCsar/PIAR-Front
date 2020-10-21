import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarTiposIdentificacionComponent } from './ventana-crear-editar-tipos-identificacion.component';

describe('VentanaCrearEditarTiposIdentificacionComponent', () => {
  let component: VentanaCrearEditarTiposIdentificacionComponent;
  let fixture: ComponentFixture<VentanaCrearEditarTiposIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarTiposIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarTiposIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
