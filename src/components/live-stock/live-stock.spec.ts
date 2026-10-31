import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStock } from './live-stock';

describe('LiveStock', () => {
  let component: LiveStock;
  let fixture: ComponentFixture<LiveStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
