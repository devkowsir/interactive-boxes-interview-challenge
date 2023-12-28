import { Grid } from "@/app";

interface ShowGridProps {
  grid: Grid;
  toggleSelection: (i: number, j: number) => void;
}

export const ShowGrid = ({ grid, toggleSelection }: ShowGridProps) => {
  if (grid === null) return;
  return (
    <div
      className="grid items-center justify-center gap-4 w-full mt-4"
      style={{
        gridTemplateColumns: `repeat(${grid.length}, minmax(auto, 60px))`,
      }}>
      {grid.map((row, i) =>
        row.map(({ selected, value }, j) => (
          <div
            key={`${i}${j}`}
            className="text-center text-black text-lg aspect-square flex justify-center items-center">
            <button
              onClick={() => toggleSelection(i, j)}
              className={`${
                selected ? "bg-blue-500" : "bg-white"
              } w-full h-full`}>
              {value}
            </button>
          </div>
        ))
      )}
    </div>
  );
};
