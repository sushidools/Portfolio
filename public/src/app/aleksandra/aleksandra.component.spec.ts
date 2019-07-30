import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleksandraComponent } from './aleksandra.component';

describe('AleksandraComponent', () => {
  let component: AleksandraComponent;
  let fixture: ComponentFixture<AleksandraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleksandraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleksandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
