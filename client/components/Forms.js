import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form'
import { SearchContext } from '../context/SearchContext'


const Forms = () => {
  const { searchStr, changeSearchStr } = useContext(SearchContext)

  return (
    <Form
      className='my-4 form-inline'
    >
      <Form.Control
        onChange={changeSearchStr}
        className="form-control col mr-2"
        placeholder="Search"
        value={searchStr}
      />
    </Form>
  )
}

export default Forms
