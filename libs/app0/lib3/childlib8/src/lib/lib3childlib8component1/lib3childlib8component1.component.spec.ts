import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component1Component } from './lib3childlib8component1.component';

describe('Lib3childlib8component1Component', () => {
  let component: Lib3childlib8component1Component;
  let fixture: ComponentFixture<Lib3childlib8component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});