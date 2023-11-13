import { useContext } from 'react'
import { CountContext } from './CountContext'

function CounterText() {
  const count = useContext(CountContext).count
  return (
    <div>
      Clicked {count} time(s).
    </div>
  )
}

export default CounterText
