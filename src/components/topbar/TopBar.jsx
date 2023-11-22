import React from 'react';
import classes from './top-bar.module.css'
const TopBar = () => {
  return (
    <div className={classes.topBar}>
      <h1 className={classes}>
        SUDOKU
      </h1>
    </div>
  );
};

export default TopBar;