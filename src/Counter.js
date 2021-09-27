import {useState} from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="counter">
      <h3>Counter: {counter}</h3>
      <button className="btn-counter" type="submit" onClick={() => {
        setCounter(counter + 1)
      }}>
        Increase Counter
      </button>
      <button className="btn-counter" type="submit" onClick={() => {
        setCounter(counter - 1)
      }}>
        Decrease Counter
      </button>
    </div>
  )
}

export default Counter
