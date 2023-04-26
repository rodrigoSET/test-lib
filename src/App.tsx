import { DropDown } from './components'
import './global.css'

function App() {
  const numberOfItems = 3

  const items = Array.from({ length: numberOfItems }, (_, index) => {
    return (
      <div className="wrapper" key={index}>
        <p>{index + 1}</p>
      </div>
    )
  })

  return (
    <>
      <div>
        <DropDown
          title="DropDown 1"
          options={{
            animation: {
              animation: 'none',
              animationDuration: '1s',
              animationFillMode: 'forwards',
            },
          }}
        >
          {items}
        </DropDown>
      </div>
    </>
  )
}

export default App
