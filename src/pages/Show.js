/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAPI } from '../Misc/config'

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  
  useEffect(() =>{
    getAPI(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
      setShow(results);
    });

  }, [id])
  console.log('show', show)

    return <div>This is show page</div>
}


export default Show
