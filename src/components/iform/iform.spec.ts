import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iform } from './iform';

describe('Iform', () => {
  let component: Iform;
  let fixture: ComponentFixture<Iform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
