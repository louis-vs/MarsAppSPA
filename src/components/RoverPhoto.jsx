import styled from '@emotion/styled'

function RoverPhoto({ imgSrc, date }) {
  const Container = styled.div`
  width: 25vw;
  margin: 1em;
  `

  const Photo = styled.img`

      border-radius: 10px;
      margin: 10px;
      max-width: 100%;
  `

  const Label = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  `

  return (<Container>   
    <Photo src={imgSrc}/>
    <Label>{date}</Label>
    </Container>
  )
}

export default RoverPhoto
