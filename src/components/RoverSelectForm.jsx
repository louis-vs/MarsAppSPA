import Select from 'react-select'

function RoverSelectForm({ rovers, currentRover, setRover }) {
  const selectOptions = rovers.map((rover) => { return { value: rover.id, label: rover.name } })

  const handleChange = (selectedOption) => {
    setRover(rovers.entries().find((rover) => rover.id === selectedOption.value))
  }

  return (
    <>
      <Select 
        options={selectOptions} 
        handleChange={handleChange} 
        value={selectOptions.find((option) => option.value === currentRover.id)} 
      />
    </>
  )
}

export default RoverSelectForm
