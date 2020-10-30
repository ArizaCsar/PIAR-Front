import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarDistanciaComponent } from './ventana-crear-editar-distancia.component';

describe('VentanaCrearEditarDistanciaComponent', () => {
  let component: VentanaCrearEditarDistanciaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarDistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarDistanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
