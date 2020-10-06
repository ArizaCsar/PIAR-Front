import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarPaisComponent } from './ventana-crear-editar-pais.component';

describe('VentanaCrearEditarComponent', () => {
  let component: VentanaCrearEditarPaisComponent;
  let fixture: ComponentFixture<VentanaCrearEditarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
