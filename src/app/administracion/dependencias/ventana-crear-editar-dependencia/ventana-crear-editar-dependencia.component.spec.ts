import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarDependenciaComponent } from './ventana-crear-editar-dependencia.component';

describe('VentanaCrearEditarDependenciaComponent', () => {
  let component: VentanaCrearEditarDependenciaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarDependenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarDependenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
