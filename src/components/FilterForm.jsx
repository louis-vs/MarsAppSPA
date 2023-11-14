import { useState } from 'react'
import Select from 'react-select'

function FilterForm({ rovers, currentRover, setRover, currentCamera, setCamera }) {
  const [ cameras, setCameras ] = useState([])

  const handleRoverSelection = (selectedOption) => {
    const selectedRover = rovers.find((rover) => rover.id === selectedOption.value)
    setRover(selectedRover)
    setCameras(selectedRover.cameras)
    setCamera(selectedRover.cameras[0])
  }

  const handleCameraSelection = (selectedOption) => {
    setCamera(currentRover.cameras.find((camera) => camera.name === selectedOption.value))
  }

  const roverOptions = rovers.map((rover) => { return { value: rover.id, label: rover.name } })
  const cameraOptions = cameras.map((camera) => { return { value: camera.name, label: camera.fullName}})

  return (
    <>
      <Select 
        options={roverOptions} 
        onChange={handleRoverSelection} 
        value={roverOptions.find((option) => option.value === currentRover.id)} 
      />
      {
        currentRover.id &&
          <Select 
            options={cameraOptions} 
            onChange={handleCameraSelection} 
            value={currentCamera ? cameraOptions.find((option) => option.value === currentCamera.name) : '...'} 
          />
      }
    </>
  )
}

export default FilterForm
