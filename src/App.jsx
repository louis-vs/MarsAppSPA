import { useState, useEffect } from 'react'
import './App.css'
import InformationBox from './components/InformationBox.jsx'
import Counter from './components/Counter.jsx'
import nasaLogo from '/NASA_logo.png'
import FilterForm from './components/FilterForm.jsx'
import PhotosList from './components/PhotosList.jsx'

const nasaHeading = "NASA"

const nasaBio1 = "\
The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research. Established in 1958, NASA succeeded the National Advisory Committee for Aeronautics (NACA) to give the U.S. space development effort a distinctly civilian orientation, emphasizing peaceful applications in space science. \
"
const nasaBio2 = "\
NASA has since led most American space exploration, including Project Mercury, Project Gemini, the 1968–1972 Apollo Moon landing missions, the Skylab space station, and the Space Shuttle. NASA currently supports the International Space Station and oversees the development of the Orion spacecraft and the Space Launch System for the crewed lunar Artemis program, the Commercial Crew spacecraft, and the planned Lunar Gateway space station. \
"

const apiUrl = "http://localhost:8000"

function App() {
  const [ rovers, setRovers ] = useState([])
  const [ currentRover, setCurrentRover ] = useState({})
  const [ currentCamera, setCamera ] = useState({})
  const [ photos, setPhotos ] = useState([])
  const [ errorState, setErrorState ] = useState(undefined)

  useEffect(() => {
    const fetchRovers = async () => {
      const response = await fetch(`${apiUrl}/rovers`)
      if (!response.error) {
        setRovers(await response.json())
        setErrorState(undefined)
      } else {
        setErrorState(await response.json())
      }
    }
    fetchRovers().catch(console.error)
  }, [])

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`${apiUrl}/rovers/${currentRover.name}/photos/${currentCamera.name}`)
      if (!response.error) {
        setPhotos(await response.json())
        setErrorState(undefined)
      } else {
        setErrorState(undefined)
      }
    }

    if (currentRover.name && currentCamera.name) {
      fetchPhotos().catch(console.error)
    }
  }, [currentRover, currentCamera])

  const errorMessage = (
    <div className="error">
      <p>{errorState && errorState.error}</p>
    </div>
  )

  return (
    <>
      <h1>Vite + React</h1>
      { errorState && errorMessage }
      <div className="card">
        <FilterForm 
          rovers={rovers} 
          currentRover={currentRover} 
          setRover={setCurrentRover}
          currentCamera={currentCamera}
          setCamera={setCamera}
        />
      </div>
      <div className="card">
        <PhotosList photos={photos}/>
      </div>
      <div className="card">
        <InformationBox heading={nasaHeading} image={nasaLogo} paragraphs={[nasaBio1, nasaBio2]} />
        <Counter/>
      </div>
    </>
  )
}

export default App
