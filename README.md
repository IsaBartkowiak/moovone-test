# MoovOneTest

## Code

```ts
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
```

## Visual representation 

Angular app :
https://isabartkowiak.github.io/moovone-test/

## Algorithm choices explanations

For the resolution of this algorithm, I assumed that the transition occurs according to the state of the 2 neighboring cells such as:
- 0 and 0 gives 0
- 1 and 1 gives 0
- 0 and 1 gives 1
- 1 and 0 gives 1

Based on this observation, it is possible to subtract the states of the 2 neighboring cells, then to obtain the absolute value to determine the state of the current cell.


## Algorithm implementation explanations

I chose to implement the algorithm with a recursive function, but in a professional context, I probably would have choosen a simple loop to allow a better understanding / readability of the code. A possible improvement would be to end the process when all the configuration values ​​are at 0.


