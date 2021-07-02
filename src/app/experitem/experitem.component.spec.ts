import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperitemComponent } from './experitem.component';

describe('ExperitemComponent', () => {
  let component: ExperitemComponent;
  let fixture: ComponentFixture<ExperitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
