import React from 'react'
import ActorCard from './ActorCard'
import { FlexGrid } from '../Styled'
import IMAGE_BACKUP from '../../image/not-found.png'

const ActorGrid = ( {data} ) => (
    <FlexGrid>
      {   
    data.map( ( {person} )=> <ActorCard 
    key={person.id}
    name={person.name} 
    country = {person.country? person.country.name : null}
    birthday={person.birthday}
    deathday = {person.deathday}
    gender = {person.gender}
    image={person.image? person.image.medium : IMAGE_BACKUP }
     />)
  }
    </FlexGrid>
  )


export default ActorGrid
