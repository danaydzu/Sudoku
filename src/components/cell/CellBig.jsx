import React from 'react';
import classes from './cell.module.css'
import CellMiddle from "./CellMiddle.jsx";

const CellBig = ({cellBig, index}) => {

  return (
    <div className={classes.bigCell}>
      {cellBig.map(cellMiddle =>
        <CellMiddle
          cellMiddle={cellMiddle}
        >
        </CellMiddle>
        )}
    </div>
  );
};

export default CellBig;