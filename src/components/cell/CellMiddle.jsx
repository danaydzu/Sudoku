import React from 'react';
import classes from './cell.module.css'
import Cells from "./Cells.jsx";
const CellMiddle = ({children}) => {
  return (
    <div className={classes.middleCell}>
      {children}
    </div>
  );
};

export default CellMiddle;