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
  // for colour change
  const [fiboCellsCopy, setFiboCellsCopy] = useState([...array2D])


  const clickAction = (e, clickedRowIndex, clickedColumnIndex) => {
    e.preventDefault()

    const updatedCells = increment(clickedRowIndex, clickedColumnIndex)
    flashColourChange(updatedCells)
    rowFibonacciCheck()
    columnFibonacciCheck()
  }

  const increment = (clickedRowIndex, clickedColumnIndex) => {
    return fiboCells.map((row, boardRowIndex) => {
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
  }

  const flashColourChange = (updatedCells) => {
    setFiboCells(updatedCells)

    // increment difference is compared in cell then reset
    setTimeout(() => {
      setFiboCellsCopy(updatedCells)
    }, 500)
  }

  const columnFibonacciCheck = () => {
    let fiboArray = []

    for(let row = 0; row <= 49; row++) {
      for(let col = 0; col <= 47; col++) {
        if(fiboArray.length === 5) {
          fiboArray.forEach((el) => fiboCells[el.col][el.row] = 'x')

          setFiboCells(fiboCells)
          fiboArray = []
        }
        if(fiboCells[col][row] != 0 && (fiboCells[col][row] + fiboCells[col + 1][row] === fiboCells[col + 2][row])) {
          fiboArray.push({row, col})
        } else {
          fiboArray = []
        }
    }
  }
}

  const rowFibonacciCheck = () => {
    let fiboArray = []

    for(let row = 0; row <= 49; row++) {
      for(let col = 0; col <= 47; col++) {
        if(fiboArray.length === 5) {
          fiboArray.forEach((el) => fiboCells[el.row][el.col] = 'x')
          setFiboCells(fiboCells)
          fiboArray = []
        }
        if(fiboCells[row][col] !== 0 && (fiboCells[row][col] + fiboCells[row][col + 1] === fiboCells[row][col + 2])) {
          fiboArray.push({row, col})
        } else {
          fiboArray = []
        }
    }
  }
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
          clickAction={clickAction}
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