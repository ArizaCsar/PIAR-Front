import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposEtnicosComponent } from './grupos-etnicos.component';

describe('GruposEtnicosComponent', () => {
  let component: GruposEtnicosComponent;
  let fixture: ComponentFixture<GruposEtnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposEtnicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposEtnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
