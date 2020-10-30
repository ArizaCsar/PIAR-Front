import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarSedeComponent } from './ventana-crear-editar-sede.component';

describe('VentanaCrearEditarSedeComponent', () => {
  let component: VentanaCrearEditarSedeComponent;
  let fixture: ComponentFixture<VentanaCrearEditarSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
