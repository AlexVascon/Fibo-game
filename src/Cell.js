export default function Cell ({value}) {
  return (
    <div
    style={{
      border: '1px solid black',
      display: 'flex',
      placeContent: 'center center',
      alignItems: 'center',
      backgroundColor: 'grey',
    }}
    >{value}</div>
  )
}
