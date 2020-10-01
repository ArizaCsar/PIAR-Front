import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantilla2Component } from './plantilla2.component';

describe('Plantilla2Component', () => {
  let component: Plantilla2Component;
  let fixture: ComponentFixture<Plantilla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantilla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantilla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
