import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesContentComponent } from './clases-content.component';

describe('ClasesContentComponent', () => {
  let component: ClasesContentComponent;
  let fixture: ComponentFixture<ClasesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
