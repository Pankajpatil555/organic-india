import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulsiWellnessComponent } from './tulsi-wellness.component';

describe('TulsiWellnessComponent', () => {
  let component: TulsiWellnessComponent;
  let fixture: ComponentFixture<TulsiWellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TulsiWellnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TulsiWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
