import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposIdentificacionComponent } from './tipos-identificacion.component';

describe('TiposIdentificacionComponent', () => {
  let component: TiposIdentificacionComponent;
  let fixture: ComponentFixture<TiposIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
