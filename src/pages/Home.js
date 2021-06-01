/* eslint-disable no-console */
import React,{useState} from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import MainPageLayout from '../Components/MainPageLayout'
import ShowGrid from '../Components/show/ShowGrid';
import { getAPI } from '../Misc/config';
import { useLastQuery } from '../Misc/custom-hooks';

const Home = () => {
  const [input,setInput]=useLastQuery();
  const [results,setResults]=useState(null)
  const [searchOption,setSearchOption]=useState('shows') 

  const isShow = searchOption === 'shows';


  const onInputchange=(ev)=>{
    setInput(ev.target.value)
  }

  const onsearch=()=>
  {
    getAPI(`/search/${searchOption}?q=${input}`)
    .then(result=>
      {setResults(result)
      })
  }

  const onKeyDown = ev =>{
    if(ev.keyCode === 13){
      onsearch();
    }
  };

  const onRadioChange = ev =>{
    setSearchOption(ev.target.value)

  }
  console.log(searchOption);

  const renderResults = () =>{
    if(results && results.length === 0){
        return <div>No results</div>;
    }
    if(results && results.length>0){
      return results[0].show 
      ?<ShowGrid data={results} />
      : <ActorGrid data={results} />
    }
    return null;

  }

  return (
    <MainPageLayout>
      <input type='text'  placeholder='Search for something' onChange={onInputchange} onKeyDown={onKeyDown} value={input}  />
      <div>
        <label htmlFor="show">
          Shows
          <input id='show' type='radio' checked={isShow} value="shows" onChange={onRadioChange} />
        </label>
        <label htmlFor="actor">
          Actors
          <input id='actor' type='radio' checked={!isShow} value="people" onChange={onRadioChange} />
        </label>
      </div>
      <button type='button' onClick={onsearch} >Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home