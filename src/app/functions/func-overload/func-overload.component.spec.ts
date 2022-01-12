import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncOverloadComponent } from './func-overload.component';

describe('FuncOverloadComponent', () => {
  let component: FuncOverloadComponent;
  let fixture: ComponentFixture<FuncOverloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncOverloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncOverloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
