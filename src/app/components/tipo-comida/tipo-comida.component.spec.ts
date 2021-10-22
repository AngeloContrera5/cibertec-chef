import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComidaComponent } from './tipo-comida.component';

describe('TipoComidaComponent', () => {
  let component: TipoComidaComponent;
  let fixture: ComponentFixture<TipoComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
