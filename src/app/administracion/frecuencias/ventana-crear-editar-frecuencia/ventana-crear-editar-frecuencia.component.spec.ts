import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarFrecuenciaComponent } from './ventana-crear-editar-frecuencia.component';

describe('VentanaCrearEditarFrecuenciaComponent', () => {
  let component: VentanaCrearEditarFrecuenciaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarFrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarFrecuenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarFrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
