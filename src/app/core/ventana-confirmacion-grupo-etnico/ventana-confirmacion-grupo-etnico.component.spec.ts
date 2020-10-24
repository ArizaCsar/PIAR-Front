import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaConfirmacionGrupoEtnicoComponent } from './ventana-confirmacion-grupo-etnico.component';

describe('VentanaConfirmacionGrupoEtnicoComponent', () => {
  let component: VentanaConfirmacionGrupoEtnicoComponent;
  let fixture: ComponentFixture<VentanaConfirmacionGrupoEtnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaConfirmacionGrupoEtnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaConfirmacionGrupoEtnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
