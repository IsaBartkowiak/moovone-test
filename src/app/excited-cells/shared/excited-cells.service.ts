import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcitedCellsService {

  constructor() { }

  getCellsState(cells: number[], step: number): number[] {
    if (!cells) {
      return;
    }
    if (!step) {
      return cells;
    }
    const newCellsState = cells.map((cell, index) => {
      const leftNeighbor = cells[index - 1] !== undefined ? cells[index - 1] : cells[cells.length - 1];
      const rightNeighbor = cells[index + 1] !== undefined ? cells[index + 1] : cells[0];
      return Math.abs(leftNeighbor - rightNeighbor);
    });
    if (step === 1) {
      return newCellsState;
    }
    return this.getCellsState(newCellsState, step - 1);
  }
}
