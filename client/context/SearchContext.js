import React, { useState } from "react"
const SearchContext = React.createContext()

function SearchContextProvider(props) {
  const [searchStr, setSearchStr] = useState('')

  const changeSearchStr = (e) => {
    const { value } = e.target
    setSearchStr(value.toLowerCase())
  }

  return (
    <SearchContext.Provider value={{ searchStr, changeSearchStr }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export { SearchContextProvider, SearchContext }
