import React from 'react';
import classes from './box.module.css'
const Box = ({children}) => {
  return (
    <div className={classes.box}>
      {children}
    </div>
  );
};

export default Box;