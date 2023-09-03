export default function Cell ({value, colour, rowIndex, colIndex, clickAction}) {
  return (
    <div
    onClick={(e) => clickAction(e, rowIndex, colIndex)}
    style={{
      border: '1px solid black',
      display: 'flex',
      placeContent: 'center center',
      alignItems: 'center',
      backgroundColor: colour,
    }}
    >{value}</div>
  )
}
