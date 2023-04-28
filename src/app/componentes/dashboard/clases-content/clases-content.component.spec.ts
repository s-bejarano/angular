import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesContentComponent } from './clases-content.component';
import { HttpClientTestingModule }from '@angular/common/http/testing'


fdescribe('ClasesContentComponent', () => {
  let component: ClasesContentComponent;
  let fixture: ComponentFixture<ClasesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasesContentComponent ],
      imports : [
        HttpClientTestingModule

      ]
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
