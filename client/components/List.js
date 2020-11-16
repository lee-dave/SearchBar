import React from 'react';

const List = ({ city, state }) => {
  return (
    <li>
      <span className="name">{city}, {state}</span>
    </li>
  )
}

export default List
