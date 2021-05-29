/* eslint-disable no-console */
import React,{useState} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import { getAPI } from '../Misc/config';

const Home = () => {
  const [input,setInput]=useState('');
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
      ?results.map( (item) => <div key={item.show.id}>{item.show.name}</div>)
      : results.map( (item) => <div key={item.person.id}>{item.person.name}</div>)
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