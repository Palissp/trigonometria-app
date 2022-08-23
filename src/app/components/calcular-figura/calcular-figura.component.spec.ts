import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularFiguraComponent } from './calcular-figura.component';

describe('CalcularFiguraComponent', () => {
  let component: CalcularFiguraComponent;
  let fixture: ComponentFixture<CalcularFiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularFiguraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
