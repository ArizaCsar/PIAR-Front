import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionCiudadComponent } from './ventana-confirmacion-ciudad.component';

describe('VentanaConfirmacionCiudadComponent', () => {
  let component: VentanaConfirmacionCiudadComponent;
  let fixture: ComponentFixture<VentanaConfirmacionCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
