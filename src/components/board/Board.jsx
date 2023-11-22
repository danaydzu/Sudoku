import React, {useEffect, useMemo, useState} from 'react';
import FlexBox from "../FlexBox/FlexBox.jsx";
import classes from './board.module.css'
import sudokuStart, {true_in_horizontal_2, true_in_vertical_2} from '../../utils/generate-massiv.js'
import CellBig from "../cell/CellBig.jsx";
import Cell from "../cell/Cell.jsx";
import {v4} from 'uuid';
import CellMiddle from "../cell/CellMiddle.jsx";
import Cells from "../cell/Cells.jsx";
import Panel from "../panel/Panel.jsx";
import cellBig from "../cell/CellBig.jsx";


const Board = () => {
  const [panel, setPanel] = useState(Array(9).fill(0).map((value, index) => index + 1))

  const [sudoku, setSudoku] = useState(sudokuStart())

  const [activeCell, setActiveCell] = useState(null);
  const [activeRowCell, setActiveRowCell] = useState(null);
  const [activeColCell, setActiveColCel] = useState(null);
  const [activeBoxCell, setActiveBoxCell] = useState(null);
  const [activeNumber, setActiveNumber] = useState(null)
  const [hiddenCells, setHiddenCells] = useState(generateHiddenCells());
  const [activeCellHidden, setActiveCellHidden] = useState(false)
  const [markCell, setMarkCell] = useState('')
  const [errorCell, setErrorCell] = useState([])

  useEffect(() => {
    setHiddenCells(generateHiddenCells());
  }, []);
  function restartGame (){
    setSudoku(sudokuStart())
    setHiddenCells(generateHiddenCells())
    setActiveCell(null)
    setActiveRowCell(null)
    setActiveColCel(null)
    setActiveBoxCell(null)
    setActiveNumber(null)
  }
  function generateHiddenCells() {
    const newHiddenCells = [];
    while (newHiddenCells.length < 30) {
      const indexBig = Math.floor(Math.random() * 3);
      const indexMiddle = Math.floor(Math.random() * 3);
      const indexCells = Math.floor(Math.random() * 3);
      const index = Math.floor(Math.random() * 3);
      const isCellHidden = newHiddenCells.some(
        cell => cell.indexBig === indexBig && cell.indexMiddle === indexMiddle &&
          cell.indexCells === indexCells && cell.index === index
      );

      if (!isCellHidden) {
        newHiddenCells.push({ indexBig, indexMiddle, indexCells, index });
      }
    }

    return newHiddenCells;
  }




  const removeHideCell = (indexBig, indexMiddle, indexCells, index) => {
    setHiddenCells(prevHiddenCells => prevHiddenCells.filter(hiddenCell =>
      !(hiddenCell.indexBig === indexBig && hiddenCell.indexMiddle === indexMiddle &&
        hiddenCell.indexCells === indexCells && hiddenCell.index === index)
    ));
  }
  const handleCellClick = (indexBig, indexMiddle, indexCells, index, cell, isCellHidden) => {
    // Обрабатываем клик на клетке, если нужно
    if (isCellHidden) {
      setActiveCellHidden(true)
    } else{
      setActiveCellHidden(false)
    }
    setMarkCell(null)
    // Устанавливаем новую активную клетку
    setActiveNumber(cell)
    setActiveBoxCell({indexBig, indexMiddle})
    setActiveRowCell({indexMiddle, index})
    setActiveColCel({indexBig, indexCells})
    setActiveCell({ indexBig, indexMiddle, indexCells, index });
  };
  return (
    <FlexBox>

      <div className={classes.card}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>

        <div className={classes.cardInner}>

          <div className={classes.board}>
            {sudoku.map((cellBig, indexBig) =>
              <CellBig key={`${indexBig}`}>
                {cellBig.map((cellMiddle, indexMiddle) =>
                  <CellMiddle key={`${indexBig}` + `${indexMiddle}`}>
                    {cellMiddle.map((cells, indexCells) =>
                        <Cells key={`${indexBig}` + `${indexMiddle}` + `${indexCells}`}>
                          {cells.map((cell, index) => {
                            const trueInVertical2Memoized = useMemo(() => (mark) => true_in_vertical_2(mark, sudoku, activeRowCell?.indexMiddle, activeRowCell?.index), [sudoku, activeRowCell, panel]);
                            const trueInHorizontal2Memoized = useMemo(() => (mark) => true_in_horizontal_2(mark, cellBig, activeColCell?.indexBig, activeColCell?.indexCells), [cellBig, activeColCell, panel]);
                            const isCellError =  errorCell.some(
                              errorCells => errorCells.indexBig === indexBig && errorCells.indexMiddle === indexMiddle &&
                                errorCells.indexCells === indexCells &&
                                errorCells.index === index
                            )
                            console.log(isCellError)
                            const isCellHidden = hiddenCells.some(
                              hiddenCell => hiddenCell.indexBig === indexBig && hiddenCell.indexMiddle === indexMiddle &&
                                hiddenCell.indexCells === indexCells &&
                                hiddenCell.index === index
                            );

                            return (
                              <Cell

                                key={`${indexBig}` + `${indexMiddle}` + `${indexCells}` + `${index}`}
                                setErrorCell={setErrorCell}
                                removeHideCell={() => removeHideCell(indexBig, indexMiddle, indexCells, index)}
                                markCell={markCell}
                                cell={cell}
                                trueInVertical2Memoized={trueInVertical2Memoized}
                                trueInHorizontal2Memoized={trueInHorizontal2Memoized}
                                setMarkCell={setMarkCell}
                                isCellError={isCellError}
                                isActiveNumber={
                                  activeNumber &&
                                  activeNumber === cell
                                }
                                isActiveRowCell={activeRowCell &&
                                  activeRowCell.indexMiddle === indexMiddle &&
                                  activeRowCell.index === index
                                }
                                isActiveColCell={activeColCell &&
                                  activeColCell.indexBig === indexBig &&
                                  activeColCell.indexCells === indexCells
                                }
                                isActive={activeCell &&
                                  activeCell.indexBig === indexBig &&
                                  activeCell.indexMiddle === indexMiddle &&
                                  activeCell.indexCells === indexCells &&
                                  activeCell.index === index
                                }
                                isActiveaBoxCell={activeBoxCell &&
                                  activeBoxCell.indexBig === indexBig &&
                                  activeBoxCell.indexMiddle === indexMiddle
                                }

                                isCellHidden={isCellHidden}
                                onClick={() => handleCellClick(indexBig, indexMiddle, indexCells, index, cell, isCellHidden)}
                                activeCellHidden={activeCellHidden}
                              />
                            );
                          })}
                        </Cells>
                    )}

                  </CellMiddle>

                )}

              </CellBig>


            )

            }
          </div>


        </div>

      </div>
      <Panel key={v4()}  panel={panel} setMarkCell={setMarkCell} markCell={markCell} restartGame={restartGame}/>
    </FlexBox>
  );
};

export default Board;