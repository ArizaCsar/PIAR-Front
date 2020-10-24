import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDiscapacidadesComponent } from './tipos-discapacidades.component';

describe('TiposDiscapacidadesComponent', () => {
  let component: TiposDiscapacidadesComponent;
  let fixture: ComponentFixture<TiposDiscapacidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDiscapacidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDiscapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
