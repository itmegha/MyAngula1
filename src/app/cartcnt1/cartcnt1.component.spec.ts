import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartcnt1Component } from './cartcnt1.component';

describe('Cartcnt1Component', () => {
  let component: Cartcnt1Component;
  let fixture: ComponentFixture<Cartcnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartcnt1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartcnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
