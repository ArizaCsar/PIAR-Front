import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarDiscapacidadComponent } from './ventana-crear-editar-discapacidad.component';

describe('VentanaCrearEditarDiscapacidadComponent', () => {
  let component: VentanaCrearEditarDiscapacidadComponent;
  let fixture: ComponentFixture<VentanaCrearEditarDiscapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarDiscapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
