import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagGameComponent } from './flag-game.component';

describe('FlagGameComponent', () => {
  let component: FlagGameComponent;
  let fixture: ComponentFixture<FlagGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
