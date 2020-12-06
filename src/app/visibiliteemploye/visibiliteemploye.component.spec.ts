import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibiliteemployeComponent } from './visibiliteemploye.component';

describe('VisibiliteemployeComponent', () => {
  let component: VisibiliteemployeComponent;
  let fixture: ComponentFixture<VisibiliteemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibiliteemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibiliteemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
