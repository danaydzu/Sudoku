import React, {useEffect, useState} from 'react';
import classes from './cell.module.css'
import Cell from "./Cell.jsx";
import {ListItem} from "@mui/material";
const Cells = ({cells, }) => {
  let count = -1

  const [stateCells, setStateCells] = useState(cells)
  useEffect(()=>{
    console.log(cells)
  },
    [stateCells])
  return (

    <ListItem sx={{
      gap: '1px',
      gridTemplateColumns: 'repeat(3, 6vmin)',
      padding:"0",
      display: 'grid',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }}>
      {cells.map((cell) => {
        count++
        return(
          <Cell
            count={count}
            stateCells={stateCells}
            setStateCells={setStateCells}
            cell={cell}

          >

        </Cell>
        )}
      )}
    </ListItem>
  );
};

export default Cells;