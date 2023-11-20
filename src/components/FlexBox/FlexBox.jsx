import React from 'react';
import classes from './flexbox.module.css'
const FlexBox = ({children}) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

export default FlexBox;