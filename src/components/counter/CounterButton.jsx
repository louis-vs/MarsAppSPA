import { useContext } from 'react'
import { CountContext } from './CountContext'

function CounterButton() {
  const onClick = useContext(CountContext).onClick
  return (
    <button onClick={onClick}>
      Click me!
    </button>
  )
}

export default CounterButton
