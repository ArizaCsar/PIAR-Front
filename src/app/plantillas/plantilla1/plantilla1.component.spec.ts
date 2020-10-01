import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantilla1Component } from './plantilla1.component';

describe('Plantilla1Component', () => {
  let component: Plantilla1Component;
  let fixture: ComponentFixture<Plantilla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantilla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantilla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
