//import { } from 'react'};
import './InformationBox.css'

function InformationBox({ heading, image, paragraphs }) {
  const paragraphItems = paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (
    <>
      <h2>{heading}</h2>
      {paragraphItems}
      <img src={image} />
    </>
  )
}

export default InformationBox
