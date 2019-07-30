import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaComponent } from './nina.component';

describe('NinaComponent', () => {
  let component: NinaComponent;
  let fixture: ComponentFixture<NinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
