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
  const [fiboCellsCopy, setFiboCellsCopy] = useState([...array2D])

  const increment = (e, clickedRowIndex, clickedColumnIndex) => {
    e.preventDefault()

    const copy = fiboCells.map((row, boardRowIndex) => {
      // increment row
      if(boardRowIndex === clickedRowIndex) {
        row = row.map((el) => el === 'x' ? el : el +=1)
      } else {
        // increment column
        row = row.map((el, boardColIndex) => {
          if(boardColIndex === clickedColumnIndex) {
            if(el === 'x') return el
            el += 1
          }
          return el
        })
      }
      return row
    })

    setFiboCells(copy)
  }

  return (
    <div className="center">
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(50, 20px)',
      gridTemplateRows: 'reteat(50, 20px)',
    }}>
      {
        fiboCells.map((row, i) => row.map((col, j) => (
          <Cell 
          increment={increment}
          value={col} 
          colour={fiboCells[i][j] === 'x' ? 'green' : (fiboCells[i][j] === fiboCellsCopy[i][j] ? "#E0E0E0" : "yellow")} 
          rowIndex={i} 
          colIndex={j}
          />
        )))
      }
    </div>
    </div>
  );
};