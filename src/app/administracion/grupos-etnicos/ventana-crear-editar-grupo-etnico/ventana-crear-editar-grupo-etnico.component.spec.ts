import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarGrupoEtnicoComponent } from './ventana-crear-editar-grupo-etnico.component';

describe('VentanaCrearEditarGrupoEtnicoComponent', () => {
  let component: VentanaCrearEditarGrupoEtnicoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarGrupoEtnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarGrupoEtnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarGrupoEtnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
