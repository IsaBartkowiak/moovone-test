import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcitedCellsComponent } from './excited-cells.component';

describe('ExcitedCellsComponent', () => {
  let component: ExcitedCellsComponent;
  let fixture: ComponentFixture<ExcitedCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcitedCellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcitedCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
