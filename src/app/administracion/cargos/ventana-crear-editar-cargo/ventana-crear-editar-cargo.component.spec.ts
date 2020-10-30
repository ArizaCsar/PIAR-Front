import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarCargoComponent } from './ventana-crear-editar-cargo.component';

describe('VentanaCrearEditarCargoComponent', () => {
  let component: VentanaCrearEditarCargoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
