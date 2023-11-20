import React, {useEffect, useState} from 'react';
import FlexBox from "../FlexBox/FlexBox.jsx";
import classes from './board.module.css'
import sudokuStart from '../../utils/generate-massiv.js'
import CellBig from "../cell/CellBig.jsx";


const Board = () => {
  const [massivRef, setMassivRef] = useState([])
  const [sudoku, setSudoku] = useState(sudokuStart())
  console.log(sudoku)
  return (
    <FlexBox>
      <div className={classes.card}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>

        <div className={classes.cardInner}>

          <div className={classes.board}>
            {sudoku.map((cellBig, index) =>
              <CellBig
                index={index}
                cellBig={cellBig}
              >

              </CellBig>
            )

            }
          </div>


        </div>

      </div>
    </FlexBox>
  );
};

export default Board;