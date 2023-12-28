import { Grid } from "@/app";
import getDefaultGrid from "@/utils/get-default-grid";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface CreateGridProps {
  setGrid: Dispatch<SetStateAction<Grid>>;
}

export const CreateGrid = ({ setGrid }: CreateGridProps) => {
  const [input, setInput] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const n = Number(input);
    if (Number.isNaN(n) || n <= 0) return;
    else {
      setGrid(getDefaultGrid(n));
      setInput("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="border border-white p-2 text-black"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="border border-white p-2">
        Create Grid
      </button>
    </form>
  );
};
