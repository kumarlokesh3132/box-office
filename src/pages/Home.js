/* eslint-disable no-console */
import React,{useState} from 'react'
import ActorGrid from '../Components/actor/ActorGrid';
import CustomRadio from '../Components/CustomRadio';
import MainPageLayout from '../Components/MainPageLayout'
import ShowGrid from '../Components/show/ShowGrid';
import { getAPI } from '../Misc/config';
import { useLastQuery } from '../Misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

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
      <SearchInput type='text'  placeholder='Search for something' onChange={onInputchange} onKeyDown={onKeyDown} value={input}  />
      <RadioInputsWrapper>
        <div>

          <CustomRadio
          label ='Shows'
          id='show'
           checked={isShow} 
           value="shows" 
           onChange={onRadioChange} />

        </div>
        <div>

        <CustomRadio
          label ='Actors'
          id='actor'
          checked={!isShow}
          value="people"
          onChange={onRadioChange} />
         
         </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button type='button' onClick={onsearch} >Search</button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home