import React from 'react';

const ColorItem = (props) => {
  return (
    <div>
      <button onClick= {props.hangeTheme} >Zmień</button>
    </div>
  )
}

export default ColorItem;
