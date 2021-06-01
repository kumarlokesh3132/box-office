/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react'
import { useParams } from 'react-router-dom'
import Cast from '../Components/show/Cast';
import Details from '../Components/show/Details';
import Season from '../Components/show/Season';
import ShowMainData from '../Components/show/ShowMainData';
import { useShow } from '../Misc/custom-hooks';


import { ShowPageWrapper, InfoBlock } from './Show.styled';




const Show = () => {
  const { id } = useParams();

  const {show, isLoading, error} = useShow(id);

  if(isLoading){
    return<div>Data is Loading</div>
  }


  if(error){
    return<div>Error occured: {error}</div>
  }

    return <ShowPageWrapper>
      <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres} />

      <InfoBlock>
        <h2>Details</h2>
        <Details status={show.status} network={show.network} premiered={show.premiered} />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Season seasons={show._embedded.seasons}/>
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
}


export default Show
