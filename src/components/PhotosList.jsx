import { useState } from "react"
import RoverPhoto from "./RoverPhoto"
import PageControlButtons from "./PageControlButtons"

const pageLength = 5

function PhotosList({ photos }) {
  const [ page, setPage ] = useState(0)

  return <>
    <PageControlButtons 
      currentPage={page} 
      changePage={setPage} 
      pageCount={Math.ceil(photos.length / 5)}
    />
    {
      photos.length > 0 ?
        photos
          .slice(pageLength * page, pageLength * (page + 1))
          .map((photo) => (
            <RoverPhoto key={photo.id} imgSrc={photo.imgSrc} date={photo.date} />
          )) 
        :
          <p>no photos!</p>
    }
  </>
}

export default PhotosList
