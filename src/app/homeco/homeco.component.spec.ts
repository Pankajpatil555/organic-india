import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecoComponent } from './homeco.component';

describe('HomecoComponent', () => {
  let component: HomecoComponent;
  let fixture: ComponentFixture<HomecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
