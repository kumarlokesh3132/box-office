import React from 'react'
import ShowCard from './ShowCard'
import { FlexGrid } from '../Styled'
import IMAGE_BACKUP from '../../image/not-found.png'
import {useShows} from '../../Misc/custom-hooks'

const ShowGrid = ( { data }) =>  {

    const [starred, dispatchStarred] = useShows();
    return (<FlexGrid>{
    
      data.map( ( {show} )=> {
        const isStarred = starred.includes(show.id); 

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id })
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id })
          }
        }
        

        return(<ShowCard 
          key={show.id}
          id={show.id}
          name={show.name} 
          image={show.image? show.image.medium : IMAGE_BACKUP }
          summary={show.summary}
          onStarClicked = {onStarClick} 
          isStarred = {isStarred}/>)
      })
    } 
    </FlexGrid>
  )
}


export default ShowGrid
