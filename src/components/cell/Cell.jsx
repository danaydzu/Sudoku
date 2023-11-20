import React, {useEffect, useRef, useState} from 'react';
import classes from './cell.module.css';
import {ListItemButton} from "@mui/material";

const Cell = ({count, stateCells, setStateCells, cell, }) => {
  let massiv;
  const [isActive, setIsActive] = useState(false);

  function cellClick() {
    console.log(massivRef)
    massiv = [...stateCells]
    setIsActive(!isActive)
    massiv[count] = 3
    setStateCells(massiv)
    // setActive(true)
    // for (const currentRef of massivRef) {
    //   if (currentRef.current.classList.contains('activeCell')) {
    //     currentRef.current.classList.remove('activeCell');
    //   }
    // }
    //
    // ref.current.classList.add('activeCell');
  }

  return (

    <ListItemButton className={`${isActive ? classes.activeCell : ''}`}  datatype={stateCells[count]} onClick={cellClick} sx={{
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      gap: '1px',
      height: '100%',
      fontSize: '1.5vmin',
      color: 'white',
      minWidth: ' 6vmin',
      // background: isActive ? 'white' : 'transparent',



    }}>

      {stateCells[count]}
    </ListItemButton>

  );
};

export default Cell;