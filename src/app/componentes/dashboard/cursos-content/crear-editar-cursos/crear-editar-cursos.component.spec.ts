import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarCursosComponent } from './crear-editar-cursos.component';

describe('CrearEditarCursosComponent', () => {
  let component: CrearEditarCursosComponent;
  let fixture: ComponentFixture<CrearEditarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
