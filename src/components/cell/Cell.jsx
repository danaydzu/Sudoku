import React, {useEffect, useState} from 'react';
import classes from './cell.module.css';
import {ListItemButton} from "@mui/material";


const Cell = ({setErrorCell, removeHideCell,
                markCell, cell,trueInVertical2Memoized,
                trueInHorizontal2Memoized,setMarkCell,isCellError,
                isActiveNumber, isActiveRowCell,
                isActiveColCell, isActive,
                isActiveaBoxCell, isCellHidden,
                onClick, activeCellHidden
}) => {
  const getErrorCell = () => {
    const newHErrorCells = [];

    const horizontalResult = trueInHorizontal2Memoized(markCell);

    const verticalResult = trueInVertical2Memoized(markCell);
    // console.log(verticalResult)
    if (horizontalResult) {
      newHErrorCells.push(horizontalResult);
    }

    if (verticalResult) {
      newHErrorCells.push(verticalResult);
    }

    return newHErrorCells;

  }


  const getCellClassName = () => {
    if (isActive) {
      return classes.activeCell;
    } else if (isCellError && !isCellHidden) {
      return classes.activeErrorCell
    } else if (isActiveNumber && !activeCellHidden && !isCellHidden) {
      return classes.activeNumber;
    } else if (isActiveaBoxCell || isActiveRowCell || isActiveColCell) {
      return classes.activeLine;
    }
    return '';
  };
  useEffect(() => {
    if (isCellHidden && markCell && isActive && markCell !== cell) {
      let irr = getErrorCell();
      setErrorCell(irr);
    }
  }
, [isCellHidden, markCell, isActive, cell]);
  const getCellNumber = () => {
    if (isCellHidden && markCell && isActive) {
      if(markCell === cell){
        console.log(markCell);
        removeHideCell();
        return cell;
      } else {
          removeHideCell()
          return markCell
      }



    }
    return isCellHidden ? '' : cell;
  };

  return (

    <ListItemButton
      className={getCellClassName()}
      onClick={onClick} sx={{
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      gap: '1px',
      height: '100%',
      fontSize: '1.7vw',
      color: '#dee2e3',
      padding: '0',
      minWidth: 'none',


    }}>
      {getCellNumber()}
    </ListItemButton>

  );
};

export default Cell;