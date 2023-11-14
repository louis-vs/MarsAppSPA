function PageControlButtons({ currentPage, changePage, pageCount }) {
  return <div>
    {
      pageCount > 1 && <>

        { 
          currentPage > 0 && 
            <button onClick={() => changePage(Math.max(currentPage - 1, 0))}>Previous</button> 
        }

        { 
          currentPage < pageCount - 1 && 
            <button onClick={() => changePage(Math.min(currentPage + 1, pageCount))}>Next</button>
        }
      </>
    }
  </div>
}

export default PageControlButtons
