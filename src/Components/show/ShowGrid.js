import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_BACKUP from '../../image/not-found.png'

const ShowGrid = ( { data }) =>  (
    <div>{
    
      data.map( ( {show} )=> <ShowCard 
      key={show.id}
      id={show.id}
      name={show.name} 
      image={show.image? show.image.medium : IMAGE_BACKUP }
      summary={show.summary} />)
    } 
    </div>
  )


export default ShowGrid
