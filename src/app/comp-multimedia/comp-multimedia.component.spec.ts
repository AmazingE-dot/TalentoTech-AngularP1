import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMultimediaComponent } from './comp-multimedia.component';

describe('CompMultimediaComponent', () => {
  let component: CompMultimediaComponent;
  let fixture: ComponentFixture<CompMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompMultimediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
