import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarOcupacionComponent } from './ventana-crear-editar-ocupacion.component';

describe('VentanaCrearEditarOcupacionComponent', () => {
  let component: VentanaCrearEditarOcupacionComponent;
  let fixture: ComponentFixture<VentanaCrearEditarOcupacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarOcupacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarOcupacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
