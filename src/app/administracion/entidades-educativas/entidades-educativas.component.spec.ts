import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesEducativasComponent } from './entidades-educativas.component';

describe('EntidadesEducativasComponent', () => {
  let component: EntidadesEducativasComponent;
  let fixture: ComponentFixture<EntidadesEducativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntidadesEducativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadesEducativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
