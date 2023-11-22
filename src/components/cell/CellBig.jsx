import React from 'react';
import classes from './cell.module.css'
import CellMiddle from "./CellMiddle.jsx";

const CellBig = ({children}) => {

  return (
    <div className={classes.bigCell}>
      {children}
    </div>
  );
};

export default CellBig;