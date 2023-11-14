import { useState, useEffect } from 'react'
import './App.css'
import InformationBox from './components/InformationBox.jsx'
import Counter from './components/Counter.jsx'
import RoverSelectForm from './components/RoverSelectForm.jsx'
import nasaLogo from '/NASA_logo.png'

const nasaHeading = "NASA"

const nasaBio1 = "\
The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research. Established in 1958, NASA succeeded the National Advisory Committee for Aeronautics (NACA) to give the U.S. space development effort a distinctly civilian orientation, emphasizing peaceful applications in space science. \
"
const nasaBio2 = "\
NASA has since led most American space exploration, including Project Mercury, Project Gemini, the 1968–1972 Apollo Moon landing missions, the Skylab space station, and the Space Shuttle. NASA currently supports the International Space Station and oversees the development of the Orion spacecraft and the Space Launch System for the crewed lunar Artemis program, the Commercial Crew spacecraft, and the planned Lunar Gateway space station. \
"

const testRovers = [{"id":5,"name":"Curiosity"},{"id":7,"name":"Spirit"}];

function App() {
  const [ rovers, setRovers ] = useState(testRovers)
  const [ currentRover, setCurrentRover ] = useState({})

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <RoverSelectForm rovers={rovers} currentRover={currentRover} setRover={setCurrentRover} />
      </div>
      <div className="card">
        <InformationBox heading={nasaHeading} image={nasaLogo} paragraphs={[nasaBio1, nasaBio2]} />
        <Counter/>
      </div>
    </>
  )
}

export default App
