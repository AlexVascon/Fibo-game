import { useState } from "react"
import Cell from "./Cell"
import './App.css'

const boardDimensions = {
  width: 50,
  height: 50
}

const array2D = Array(boardDimensions.height).fill().map((row) => Array(boardDimensions.width).fill(0))

export default function FiboBoard() {

  const [fiboCells, setFiboCells] = useState(array2D)

  return (
    <div className="center">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(50, 20px)',
      gridTemplateRows: 'reteat(50, 20px)',
    }}>
      {
        fiboCells.map((row, i) => row.map((col, j) => (
        <Cell value={col} />
        )))
      }
    </div>
    </div>
  );
};