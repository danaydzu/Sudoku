import React, {useEffect, useState} from 'react';
import classes from './cell.module.css'
import Cell from "./Cell.jsx";
import {List, ListItem} from "@mui/material";
const Cells = ({children}) => {

  return (

    <List  sx={{
      gap: '1px',
      gridTemplateColumns: 'repeat(3, 4vw)',
      gridTemplateRows: 'repeat(1, 4vw)',
      padding:"0",
      display: 'grid',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth:'none',
      backgroundColor: 'transparent',
    }}>
      {children}
    </List>
  );
};

export default Cells;