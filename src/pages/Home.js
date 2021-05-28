/* eslint-disable no-console */
import React,{useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'

const Home = () => {
  const [input,setInput]=useState('')
  const onInputchange=(ev)=>{
    setInput(ev.target.value)
  }
  const onsearch=()=>
  {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json())
    .then(result=>{console.log(result)})
  }
  const onKeyDown = ev =>{
    if(ev.keyCode === 13){
      onsearch();
    }
  };

  return (
    <MainPageLayout>
      <input type='text' onChange={onInputchange} onKeyDown={onKeyDown} value={input}  />
      <button type='button' onClick={onsearch} >Search</button>
    </MainPageLayout>
  )
}

export default Home