import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarGradoComponent } from './ventana-crear-editar-grado.component';

describe('VentanaCrearEditarGradoComponent', () => {
  let component: VentanaCrearEditarGradoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarGradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
