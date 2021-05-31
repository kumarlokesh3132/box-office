/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAPI } from '../Misc/config'

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() =>{

    let isMounted = true;
    getAPI(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{

    
      if(isMounted){
        setShow(results);
      setIsLoading(false);
      }
      
    }
    ).catch(err => {
      if(isMounted){
          
      setError(err.meesage);
      setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    }

  }, [id])
  console.log('show', show)

  if(isLoading){
    return<div>Data is Loading</div>
  }

  if(error){
    return<div>Error occured: {error}</div>
  }

    return <div>This is show page</div>
}


export default Show
