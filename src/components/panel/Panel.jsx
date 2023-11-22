import React, {useState} from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {v4} from "uuid";


const Panel = ({panel, setMarkCell, markCell, restartGame}) => {
  // const [numberState, setNumberState] = useState(null)
  const getNumber = (btn)=>{
    setMarkCell(btn)

    // setNumberState(btn)
  }


  return (
    <Box  sx={{
      height:'100%',
      gap:'2vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
      alignItems: 'center'
    }}>
      <TextField
        key={v4()}
        sx={{
          color: '#f9f9f9',


          '--TextField-brandBorderColor': '#E0E3E7',
          '--TextField-brandBorderHoverColor': '#53ef7d',
          '--TextField-brandBorderFocusedColor': '#53ef7d',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',

          },
          '& .MuiInputLabel-root': {
            minWidth:'0',
            fontSize:'1.75vw',
            color: '#f9f9f9', // цвет текста метки
          },
          '& .MuiInputBase-input': {
            textAlign:'center',
            fontSize:'1.75vw',
            color: '#f9f9f9', // цвет текста ввода
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#E0E3E7', // цвет перед фокусом
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#6F7E8C', // цвет при наведении
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#53ef7d', // цвет после фокуса
          },

          '&:before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          }

        }}

        id="standard-read-only-input"
        label="VALUE"
        defaultValue={markCell}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />


      <Box >

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Typography fontSize='2vw' variant='body1'>
            New game
          </Typography>
          <IconButton onClick={restartGame} sx={{
            color: 'white',

          }}>
            <RestartAltIcon sx={{fontSize: '3vw'}}/>
          </IconButton>
        </Box>
        <Box  sx={{
          gap: '5px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 6vw)',
          gridTemplateRows: 'repeat(3, 6vw)'
        }}>
          {panel.map((btn) =>

            <Button
              key={v4()}
              onClick={() => getNumber(btn)}
              variant="outlined"
              sx={{
                color: "#f9f9f9",
                borderColor: '#f9f9f9',
                padding: '0',
                minWidth: '0',

                overflow: 'hidden',
                fontSize: '2vw',
              }}
            >{btn}</Button>
          )}
        </Box>
      </Box>


    </Box>

  );
};

export default Panel;