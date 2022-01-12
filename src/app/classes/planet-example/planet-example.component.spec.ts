import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetExampleComponent } from './planet-example.component';

describe('PlanetExampleComponent', () => {
  let component: PlanetExampleComponent;
  let fixture: ComponentFixture<PlanetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
