import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamillaComponent } from './camilla.component';

describe('CamillaComponent', () => {
  let component: CamillaComponent;
  let fixture: ComponentFixture<CamillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
