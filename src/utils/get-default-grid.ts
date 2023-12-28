import { Box } from "@/app";

export default function getDefaultGrid(n: number) {
  let grid: Box[][] = [];

  for (let i = 0; i < n; i++) {
    grid[i] = [];
    for (let j = 0; j < n; j++) {
      grid[i][j] = { value: i * n + j + 1, selected: false };
    }
  }

  return grid;
}
