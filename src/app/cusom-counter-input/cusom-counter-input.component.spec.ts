import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusomCounterInputComponent } from './cusom-counter-input.component';

describe('CusomCounterInputComponent', () => {
  let component: CusomCounterInputComponent;
  let fixture: ComponentFixture<CusomCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusomCounterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
