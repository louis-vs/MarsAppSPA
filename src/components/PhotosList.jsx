import { useState } from "react"
import RoverPhoto from "./RoverPhoto"
import PageControlButtons from "./PageControlButtons"
import { css } from "@emotion/react"

const pageLength = 5

function PhotosList({ photos }) {
  const [ page, setPage ] = useState(0)

  return <>
    <PageControlButtons 
      currentPage={page} 
      changePage={setPage} 
      pageCount={Math.ceil(photos.length / 5)}
    />
    <div css={css`
    display: flex;
    flex-wrap: wrap;
    margin: 0 20px;
    `}>
    {
      photos.length > 0 ?
        photos
          .slice(pageLength * page, pageLength * (page + 1))
          .map((photo) => (
            <RoverPhoto key={photo.id} imgSrc={photo.imgSrc} date={photo.date} />
          )) 
        :
          <p>no photos!</p>
    }</div>
  </>
}

export default PhotosList
