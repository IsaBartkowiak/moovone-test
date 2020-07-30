import { TestBed } from '@angular/core/testing';

import { ExcitedCellsService } from './excited-cells.service';

describe('ExcitedCellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    expect(service).toBeTruthy();
  });
});

describe('getCellsState', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should return the initial configuration when step is 0', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    const initialValue = [0, 1];
    expect(service.getCellsState(initialValue, 0)).toEqual(initialValue);
  });

  it('should return 1,0,1,0 when the initial configuration is 1,0,1,1 and the step is 1', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    const initialValue = [1, 0, 1, 1];
    const expectedValue = [1, 0, 1, 0];
    expect(service.getCellsState(initialValue, 1)).toEqual(expectedValue);
  });

  it('should return 0, 0, 0, 0 when the initial configuration is 1,0,1,1 and the step is 2', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    const initialValue = [1, 0, 1, 1];
    const expectedValue = [0, 0, 0, 0];
    expect(service.getCellsState(initialValue, 2)).toEqual(expectedValue);
  });

  it('should return 1, 0, 1, 1, 0, 1, 0 when the initial configuration is 1, 0, 1, 1, 0, 1, 1 and the step is 1', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    const initialValue = [1, 0, 1, 1, 0, 1, 1];
    const expectedValue = [1, 0, 1, 1, 0, 1, 0];
    expect(service.getCellsState(initialValue, 1)).toEqual(expectedValue);
  });

  it('should return 0, 0, 1, 1, 0, 0, 0 when the initial configuration is 1, 0, 1, 1, 0, 1, 1 and the step is 2', () => {
    const service: ExcitedCellsService = TestBed.get(ExcitedCellsService);
    const initialValue = [1, 0, 1, 1, 0, 1, 1];
    const expectedValue = [0, 0, 1, 1, 0, 0, 0];
    expect(service.getCellsState(initialValue, 2)).toEqual(expectedValue);
  });
});
