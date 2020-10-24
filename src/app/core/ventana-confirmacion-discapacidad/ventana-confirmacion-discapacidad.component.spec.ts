import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionDiscapacidadComponent } from './ventana-confirmacion-discapacidad.component';

describe('VentanaConfirmacionDiscapacidadComponent', () => {
  let component: VentanaConfirmacionDiscapacidadComponent;
  let fixture: ComponentFixture<VentanaConfirmacionDiscapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionDiscapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
