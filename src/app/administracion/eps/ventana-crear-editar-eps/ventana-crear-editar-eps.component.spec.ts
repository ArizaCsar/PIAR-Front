import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCrearEditarEpsComponent } from './ventana-crear-editar-eps.component';

describe('VentanaCrearEditarEpsComponent', () => {
  let component: VentanaCrearEditarEpsComponent;
  let fixture: ComponentFixture<VentanaCrearEditarEpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCrearEditarEpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaCrearEditarEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
