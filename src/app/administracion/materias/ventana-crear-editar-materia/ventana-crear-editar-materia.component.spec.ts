import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarMateriaComponent } from './ventana-crear-editar-materia.component';

describe('VentanaCrearEditarMateriaComponent', () => {
  let component: VentanaCrearEditarMateriaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
