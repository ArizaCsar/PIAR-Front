import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarParentescoComponent } from './ventana-crear-editar-parentesco.component';

describe('VentanaCrearEditarParentescoComponent', () => {
  let component: VentanaCrearEditarParentescoComponent;
  let fixture: ComponentFixture<VentanaCrearEditarParentescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarParentescoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarParentescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
