import React from 'react';
import classes from './cell.module.css'
import Cells from "./Cells.jsx";
const CellMiddle = ({cellMiddle, massivRef, setMassivRef}) => {
  return (
    <div className={classes.middleCell}>
      {cellMiddle.map(cells =>
        <Cells
                cells={cells}

        >

        </Cells>
      )}
    </div>
  );
};

export default CellMiddle;