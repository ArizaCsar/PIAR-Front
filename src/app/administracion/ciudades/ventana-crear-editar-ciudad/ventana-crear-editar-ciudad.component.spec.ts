import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarCiudadComponent } from './ventana-crear-editar-ciudad.component';

describe('VentanaCrearEditarCiudadComponent', () => {
  let component: VentanaCrearEditarCiudadComponent;
  let fixture: ComponentFixture<VentanaCrearEditarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
