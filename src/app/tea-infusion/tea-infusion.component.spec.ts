import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaInfusionComponent } from './tea-infusion.component';

describe('TeaInfusionComponent', () => {
  let component: TeaInfusionComponent;
  let fixture: ComponentFixture<TeaInfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaInfusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaInfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
