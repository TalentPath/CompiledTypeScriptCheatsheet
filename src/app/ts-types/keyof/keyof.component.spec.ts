import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyofComponent } from './keyof.component';

describe('KeyofComponent', () => {
  let component: KeyofComponent;
  let fixture: ComponentFixture<KeyofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
