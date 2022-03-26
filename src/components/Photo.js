import React, { useState } from 'react';

import { Dropdown } from './Dropdown';

const Photo = ( props ) => {
  const { cardList } = props;

  const [ menuState, setMenuState ] = useState('hide');
  const [ menuPos, setMenuPos ] = useState({ left: 0, top: 0 });

  const getPosition = (e) => {
    setMenuPos( state => ({ ...state, left: e.pageX, top: e.pageY }));
  };

  const showDropdown = () => {
    if( menuState === 'hide' ) {
      document.getElementById( 'myDropdown' ).style.display = 'block';
      setMenuState( 'show' );
    } else {
      document.getElementById( 'myDropdown' ).style.display = 'none';
      setMenuState( 'hide' );
    }
  };

  const handleClick = (e) => {
    getPosition(e);
    showDropdown();
  };

  return (
    <div className='Photo'>
      <img onClick={handleClick} src={ props.photo } alt={ props.alt } />
      <Dropdown cardList={ cardList } top={ menuPos.top } left={ menuPos.left }/>
    </div>
  );
};

export { Photo };