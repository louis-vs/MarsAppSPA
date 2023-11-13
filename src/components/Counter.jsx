import { useState, useEffect } from 'react'
import CounterButton from './counter/CounterButton.jsx'
import CounterDisplay from './counter/CounterDisplay.jsx'
import { CountContext } from './counter/CountContext.jsx'

function Counter() {
  const countKey = "count"
  const [count, setCount] = useState(Number(localStorage.getItem(countKey)))

  useEffect(() => {
    localStorage.setItem(countKey, count)
  }, [count])

  return (
    <div>
      <CountContext.Provider value={ {onClick: () => setCount((count) => count + 1), count: count} }>
        <CounterDisplay />
        <CounterButton />
      </CountContext.Provider>
    </div>
  )
}

export default Counter
