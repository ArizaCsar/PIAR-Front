import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionOcupacionComponent } from './ventana-confirmacion-ocupacion.component';

describe('VentanaConfirmacionOcupacionComponent', () => {
  let component: VentanaConfirmacionOcupacionComponent;
  let fixture: ComponentFixture<VentanaConfirmacionOcupacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionOcupacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionOcupacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
