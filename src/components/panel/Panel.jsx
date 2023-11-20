import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import {Box, IconButton} from "@mui/material";
const Panel = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems:'start'
    }}>
      <IconButton>
        <ReplayIcon/>
      </IconButton>
      <IconButton>
        <ReplayIcon/>
      </IconButton>
      <IconButton>
        <ReplayIcon/>
      </IconButton>
    </Box>
  );
};

export default Panel;