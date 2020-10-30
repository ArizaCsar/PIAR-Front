import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarJornadaComponent } from './ventana-crear-editar-jornada.component';

describe('VentanaCrearEditarJornadaComponent', () => {
  let component: VentanaCrearEditarJornadaComponent;
  let fixture: ComponentFixture<VentanaCrearEditarJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarJornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
