import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockcreateComponent } from './lockcreate.component';

describe('LockcreateComponent', () => {
  let component: LockcreateComponent;
  let fixture: ComponentFixture<LockcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});