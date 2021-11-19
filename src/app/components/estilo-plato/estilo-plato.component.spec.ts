import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloPlatoComponent } from './estilo-plato.component';

describe('EstiloPlatoComponent', () => {
  let component: EstiloPlatoComponent;
  let fixture: ComponentFixture<EstiloPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstiloPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
