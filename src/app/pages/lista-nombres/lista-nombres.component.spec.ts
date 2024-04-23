import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNombresComponent } from './lista-nombres.component';

describe('ListaNombresComponent', () => {
  let component: ListaNombresComponent;
  let fixture: ComponentFixture<ListaNombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
