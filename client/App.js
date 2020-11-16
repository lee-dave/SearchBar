import React, { useState, useEffect, useContext } from 'react';
import Forms from './components/Forms'
import { SearchContext } from './context/SearchContext'
import List from './components/List'
import { Trie } from './components/Tries'


export const App = () => {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const [city, setCity] = useState(new Trie())
  const [state, setState] = useState(new Trie())
  const [cityObj, setCityObj] = useState({})
  const [stateObj, setStateObj] = useState({})
  const { searchStr } = useContext(SearchContext)

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(array => {
        const bigDataSet = []
        const cityObj = {}
        const stateObj = {}
        // create 1mill objs to sim a big dataset
        for (let i = 0; i < 1000; i += 1) {
          bigDataSet.push(...array)
          cityObj[array[i].city.toLowerCase()] = array[i].state.toLowerCase()
          stateObj[array[i].state.toLowerCase()] = array[i].city.toLowerCase()
        }
        setCityObj(cityObj)
        setStateObj(stateObj)
        insertToTrie(bigDataSet)
      })
  }, [])

  const insertToTrie = (data) => {
    const cityTrie = new Trie()
    const stateTrie = new Trie()
    data.forEach(ele => {
      cityTrie.insert(ele.city.toLowerCase())
      stateTrie.insert(ele.state.toLowerCase())
    })
    setCity(cityTrie)
    setState(stateTrie)
  }

  function findMatches(word, city, state) {
    const cityResults = city.find(word)
    const stateResults = state.find(word)
    const array = []
    cityResults.forEach(city => array.push({ city: city, state: cityObj[city] }))
    stateResults.forEach(state => array.push({ city: stateObj[state], state: state }))
    return array
  }
  const filtered = findMatches(searchStr, city, state)

  // left to see filter number
  console.log(filtered ? filtered.length : null)

  const listArray = filtered ?
    filtered.map((obj, index) => {
      return <List key={index} city={obj.city} state={obj.state} />
    })
    : null

  return (
    <div className='App'>
      <h1>Search Bar</h1>
      <Forms />
      <ul>
        {listArray}
      </ul>
    </div>
  )
}


