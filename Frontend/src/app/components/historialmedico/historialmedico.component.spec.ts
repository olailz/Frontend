import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialmedicoComponent } from './historialmedico.component';

describe('HistorialmedicoComponent', () => {
  let component: HistorialmedicoComponent;
  let fixture: ComponentFixture<HistorialmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialmedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
