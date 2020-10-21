import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionTipoIdComponent } from './ventana-confirmacion-tipo-id.component';

describe('VentanaConfirmacionTipoIdComponent', () => {
  let component: VentanaConfirmacionTipoIdComponent;
  let fixture: ComponentFixture<VentanaConfirmacionTipoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionTipoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionTipoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
