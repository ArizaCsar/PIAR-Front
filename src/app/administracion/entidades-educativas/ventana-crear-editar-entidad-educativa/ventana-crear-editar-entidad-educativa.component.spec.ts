import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarEntidadEducativaComponent } from './ventana-crear-editar-entidad-educativa.component';

describe('VentanaCrearEditarEntidadEducativaComponent', () => {
  let component: VentanaCrearEditarEntidadEducativaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarEntidadEducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarEntidadEducativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarEntidadEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
