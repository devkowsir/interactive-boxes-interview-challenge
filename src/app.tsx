import React, { useMemo } from "react";
import { CreateGrid } from "./components/create-grid";
import { ShowGrid } from "./components/show-grid";
import getDefaultGrid from "./utils/get-default-grid";
import { getShuffledGrid } from "./utils/get-shuffled-grid";

export type Box = { value: number; selected: boolean };
export type Grid = Box[][] | null;

const App: React.FC = () => {
  const [grid, setGrid] = React.useState<Grid>(getDefaultGrid(2));

  const toggleSelection = (i: number, j: number) => {
    setGrid((grid) => {
      if (grid === null) return null;
      const newGrid = [...grid];
      newGrid[i] = [...newGrid[i]];
      newGrid[i][j] = { ...newGrid[i][j], selected: !newGrid[i][j].selected };
      return newGrid;
    });
  };

  const resetDisabled = useMemo(() => {
    if (!grid) return true;
    const flattenedBox = grid.flat();
    for (const box of flattenedBox) {
      if (box.selected) return false;
    }
    return true;
  }, [grid]);

  const resetGrid = () => {
    if (!grid) return;
    setGrid(getDefaultGrid(grid.length));
  };

  const shuffleGrid = () => {
    setGrid(getShuffledGrid(grid));
  };

  return (
    <main className="mt-[10vh]">
      <div className="flex justify-center">
        <CreateGrid setGrid={setGrid} />
      </div>
      <ShowGrid grid={grid} toggleSelection={toggleSelection} />
      <div className="mt-8 flex justify-center gap-8">
        <button
          type="button"
          className="border border-white p-2"
          disabled={resetDisabled}
          onClick={resetGrid}>
          Reset
        </button>
        <button
          type="button"
          className="border border-white p-2"
          onClick={shuffleGrid}>
          Shuffle
        </button>
      </div>
    </main>
  );
};

export default App;
