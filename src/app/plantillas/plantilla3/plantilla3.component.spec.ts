import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantilla3Component } from './plantilla3.component';

describe('Plantilla3Component', () => {
  let component: Plantilla3Component;
  let fixture: ComponentFixture<Plantilla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plantilla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantilla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
