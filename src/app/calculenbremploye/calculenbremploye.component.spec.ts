import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculenbremployeComponent } from './calculenbremploye.component';

describe('CalculenbremployeComponent', () => {
  let component: CalculenbremployeComponent;
  let fixture: ComponentFixture<CalculenbremployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculenbremployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculenbremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
